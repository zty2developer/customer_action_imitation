class InitializeSessions < ActiveRecord::Migration[5.2]
  def change
    session_index = 1
    actions = ['O', 'KS', 'IV', 'IV', 'C', 'RV', 'IV', 'O', 'CS', 'CS', 'CS', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'O', 'SI', 'SI', 'C', 'C']
    true_purchase_label = 'NP'
    intervene_prediction = ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'NI', 'I', 'NI', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I']
    intervene_probability = [0.9798, 0.9974, 0.9440, 0.9089, 0.9683, 0.8913, 0.94196, 0.8532, 0.7913, 0.7147, 0.5814, 0.5913, 0.6101, 0.6281, 0.5470, 0.5612, 0.6921, 0.7862, 0.8316, 0.8931, 0.8308, 0.8024, 0.7841, 0.8993]
    exist = CustomerSession.where(session_index: session_index).exists?
    unless exist
      CustomerSession.create!(session_index: session_index,
                              session_actions: actions.join(','),
                              true_purchase_label: true_purchase_label,
                              intervene_prediction: intervene_prediction.join(','),
                              intervene_probability: intervene_probability.join(',').to_s)
    end

    session_index = 2
    actions = ['O', 'KS', 'KS', 'KS', 'KS', 'IV', 'KS', 'C', 'KS', 'C', 'C', 'C', 'KS', 'KS', 'C', 'C', 'KS', 'O', 'KS', 'C', 'C', 'KS', 'C']
    true_purchase_label = 'NP'
    intervene_prediction = ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I']
    intervene_probability = [0.8780, 0.8469, 0.9016, 0.8106, 0.8315, 0.7925, 0.6926, 0.5241, 0.5391, 0.7041, 0.7466, 0.7931, 0.7699, 0.8024, 0.8145, 0.8931, 0.8531, 0.8742, 0.8517, 0.7976, 0.8026, 0.8578, 0.8241]
    exist = CustomerSession.where(session_index: session_index).exists?
    unless exist
      CustomerSession.create!(session_index: session_index,
                              session_actions: actions.join(','),
                              true_purchase_label: true_purchase_label,
                              intervene_prediction: intervene_prediction.join(','),
                              intervene_probability: intervene_probability.join(',').to_s)
    end

    session_index = 3
    actions = ['O', 'O', 'O', 'KS', 'IV', 'C', 'C', 'C', 'C', 'AB', 'VB', 'AB', 'VB', 'C', 'AB', 'VB', 'O', 'O', 'O', 'OV']
    true_purchase_label = 'P'
    intervene_prediction = ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'NI', 'NI', 'I', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI']
    intervene_probability = [0.9791, 0.9818, 0.8510, 0.8866, 0.7701, 0.6842, 0.6310, 0.5914, 0.6197, 0.5325, 0.6424, 0.7510, 0.6240, 0.6425, 0.8964, 0.821, 0.7362, 0.7531, 0.7196, 0.7931]
    exist = CustomerSession.where(session_index: session_index).exists?
    unless exist
      CustomerSession.create!(session_index: session_index,
                              session_actions: actions.join(','),
                              true_purchase_label: true_purchase_label,
                              intervene_prediction: intervene_prediction.join(','),
                              intervene_probability: intervene_probability.join(',').to_s)
    end

    session_index = 4
    actions = ['O', 'KS', 'IV', 'SI', 'O', 'O', 'SC', 'SI', 'RV', 'AB', 'IV', 'SI', 'O', 'RV', 'AB', 'O', 'OV', 'CMT', 'IV', 'SI']
    true_purchase_label = 'NP'
    intervene_prediction = ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'I', 'NI', 'I', 'I', 'NI', 'I', 'I']
    intervene_probability = [0.9024, 0.9277, 0.8902, 0.8804, 0.7136, 0.6491, 0.5596, 0.5430, 0.5766, 0.8215, 0.7563, 0.7025, 0.5012, 0.6104, 0.8923, 0.7204, 0.6046, 0.7924, 0.5902, 0.5632]
    exist = CustomerSession.where(session_index: session_index).exists?
    unless exist
      CustomerSession.create!(session_index: session_index,
                              session_actions: actions.join(','),
                              true_purchase_label: true_purchase_label,
                              intervene_prediction: intervene_prediction.join(','),
                              intervene_probability: intervene_probability.join(',').to_s)
    end

    session_index = 5
    actions = ['O', 'SI', 'IV', 'C', 'C', 'RV', 'C', 'SI', 'O', 'SI', 'SI', 'SI', 'IV', 'C', 'O', 'IV', 'O', 'SI', 'O', 'SI', 'O', 'SC', 'IV']
    true_purchase_label = 'NP'
    intervene_prediction = ['NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'NI', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I']
    intervene_probability = [0.9798, 0.9852, 0.9420, 0.9294, 0.9242, 0.9191, 0.7490, 0.5421, 0.5012, 0.5451, 0.6193, 0.6913, 0.6434, 0.7152, 0.6805, 0.6423, 0.7491, 0.7925, 0.7925, 0.8043, 0.7925, 0.7925, 0.7165]
    exist = CustomerSession.where(session_index: session_index).exists?
    unless exist
    CustomerSession.create!(session_index: session_index,
                            session_actions: actions.join(','),
                            true_purchase_label: true_purchase_label,
                            intervene_prediction: intervene_prediction.join(','),
                            intervene_probability: intervene_probability.join(',').to_s)
    end
  end
end
