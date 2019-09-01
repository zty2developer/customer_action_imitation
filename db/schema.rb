# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_01_020404) do

  create_table "customer_actions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "abbreviation"
    t.string "name"
    t.string "purchase_prediction"
    t.decimal "purchase_probability", precision: 10
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customer_sessions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "session_index"
    t.string "session_actions"
    t.string "true_purchase_label"
    t.string "intervene_prediction"
    t.string "intervene_probability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "final_scores", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "correct_count", default: 0
    t.integer "wrong_count", default: 0
    t.integer "missed_count", default: 0
    t.integer "total_score", default: 0
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scores", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "action_index"
    t.integer "session_index"
    t.string "intervention_prediction"
    t.string "user_prediction"
    t.integer "confidence"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "login"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "with_prediction"
  end

end
