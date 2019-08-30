class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :action_index
      t.integer :session_index
      t.string :intervention_prediction
      t.string :user_prediction
      t.integer :confidence
      t.integer :user_id

      t.timestamps
    end
  end
end
