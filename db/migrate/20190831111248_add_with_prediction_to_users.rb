class AddWithPredictionToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :with_prediction, :boolean
  end
end
