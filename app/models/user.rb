# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  birthday        :date
#  zip_code        :integer
#  phone_number    :integer
#  height          :string
#  weight          :integer
#  bust_size       :string
#  body_type       :string
#  jean_size       :integer
#  dress_size      :integer
#

class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :shopping_cart_items,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ShoppingCartItem

    def self.find_by_cred(email, password)
        @user = User.find_by(email: email)
        return nil unless @user
        @user.is_password?(password)? @user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

end
