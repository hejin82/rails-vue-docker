class CreateWidgets < ActiveRecord::Migration[6.1]
  def change
    create_table :widgets do |t|
      t.string :name
      t.int :quantity
      t.text :description

      t.timestamps
    end
  end
end
