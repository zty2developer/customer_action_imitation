class CreateCustomerSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :customer_sessions do |t|
      t.integer :session_index
      t.string :session_actions
      t.string :true_purchase_label
      t.string :intervene_prediction
      t.string :intervene_probability

      t.timestamps
    end
  end
end
