class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :homepage
      t.boolean :is_public
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
