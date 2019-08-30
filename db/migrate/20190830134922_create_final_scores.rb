class CreateFinalScores < ActiveRecord::Migration[5.2]
  def change
    create_table :final_scores do |t|
      t.integer :correct_count, default: 0
      t.integer :wrong_count, default: 0
      t.integer :missed_count, default: 0
      t.integer :total_score, default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
