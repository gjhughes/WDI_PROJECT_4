const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: false }
  }
);

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema
  .pre('validate', function checkPassword(next) {
    if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'Passwords do not match');
    }
    next();
  });

userSchema
  .pre('save', function hashPassword(next) {
    if(this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    }
    next();
  });

userSchema
  .methods.validatePassword = function validatePassword(password) {
    return bcrypt.compareSync(password, this.password);
  };

userSchema
  .set('toJSON', {
    virtuals: true,
    getters: true,
    setters: true,
    transform: function(doc, ret) {
      delete ret.passwordHash;
      delete ret.password;
      delete ret.passwordConfirmation;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  });

module.exports = mongoose.model('User', userSchema);
