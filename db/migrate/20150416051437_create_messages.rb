class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :subject
      t.string :labels
      t.boolean :starred, default: false, null: false
      t.boolean :read, default: false, null: false
      t.text :body
      t.timestamps
    end
  end
end
