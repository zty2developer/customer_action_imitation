class CustomerSessionsController < ApplicationController
  def index
    customer_sessions = CustomerSession.all

    json_array = []
    customer_sessions.each do |cs|
      cs_json = Hash.new
      cs_json[:customer_index] = cs.session_index
      cs_json[:actions] = cs.session_actions.split(',')
      cs_json[:true_purchase_label] = cs.true_purchase_label
      cs_json[:intervene_prediction] = cs.intervene_prediction.split(',')
      cs_json[:intervene_probability] = cs.intervene_probability.split(',')

      json_array << cs_json
    end

    render json: json_array
  end
end
