class CustomerSessionsController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    customer_sessions = CustomerSession.all

    json_array = []
    customer_sessions.each do |cs|
      cs_json = {}
      cs_json[:customer_index] = cs.session_index
      cs_json[:actions] = cs.session_actions.split(',')
      cs_json[:true_purchase_label] = cs.true_purchase_label
      cs_json[:intervene_prediction] = cs.intervene_prediction.split(',')
      cs_json[:intervene_probability] = cs.intervene_probability.split(',')

      json_array << cs_json
    end

    render json: json_array
  end

  def submit_result
    user_id = params[:user_id]
    session_index = params[:session_index]
    action_index = params[:action_index]
    intervention_prediction = params[:intervention_prediction]
    user_prediction = params[:user_prediction]
    confidence = params[:confidence].to_i

    current_session = CustomerSession.where(session_index: session_index).first

    final_score = FinalScore.where(user_id: user_id).first
    final_score = FinalScore.new(user_id: user_id) if final_score.blank?

    score = Score.new(user_id: user_id, action_index: action_index, session_index: session_index,
                      intervention_prediction: intervention_prediction, user_prediction: user_prediction, confidence: confidence)
    ActiveRecord::Base.transaction do
      score.save!

      if user_prediction == 'I'
        if current_session.true_purchase_label == 'P'
          final_score.wrong_count += 1
          final_score.total_score -= confidence.to_i
        elsif current_session.true_purchase_label == 'NP'
          if intervention_prediction == 'I'
            final_score.correct_count += 1
            final_score.total_score += confidence
          elsif intervention_prediction == 'NI'
            final_score.wrong_count += 1
            final_score.total_score -= confidence
          end
        end
      elsif user_prediction == 'NI'
        if current_session.true_purchase_label == 'P'
          final_score.correct_count += 1
          final_score.total_score += 25
        elsif current_session.true_purchase_label == 'NP'
          final_score.missed_count += 1
          final_score.total_score -= 25
        end
      end

      final_score.save!
    end

    render json: final_score
  end
end
