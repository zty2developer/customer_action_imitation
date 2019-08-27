class CreateCustomerActions < ActiveRecord::Migration[5.2]
  def change
    create_table :customer_actions do |t|
      t.string :abbreviation
      t.string :name
      t.string :purchase_prediction
      t.decimal :purchase_probability

      t.timestamps
    end
  end
end
