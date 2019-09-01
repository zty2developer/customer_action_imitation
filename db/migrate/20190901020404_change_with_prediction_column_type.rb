class ChangeWithPredictionColumnType < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :with_prediction, :integer
  end
end
