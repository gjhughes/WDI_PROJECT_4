const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  }
);

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.statics.fetchByIdWithPlans = fetchByIdWithPlans;

userSchema.set('toJSON', {
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

function fetchByIdWithPlans(req, res) {
  const self = this;
  return new Promise((resolve, reject) => {
    self
      .findById(req.params.id)
      .exec()
      .then(user => {
        if (!user) return res.notFound();
        req.user = user.toObject();

        return self
          .model('Plan')
          .find({ belongsTo: user.id })
          .exec();
      })

      .then(plans => {
        req.user.plans = plans;
        return resolve(req.user);
      })
      .catch(reject);
  });
}

module.exports = mongoose.model('User', userSchema);
