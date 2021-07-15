class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :content
      t.string :email
      t.integer :cnt
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
