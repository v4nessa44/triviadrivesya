const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// check password function for a specific user
userSchema.methods.matchPassword = async function (enteredPassword) {
  /* compare between passwords using bycrypt 
   NOTE: bcrypt hashes the entered password before comparing as the
   password stored in the DB is hashed
  */
  return await bycrypt.compare(enteredPassword, this.password);
};

// calls function before saving so we bcrypt the password before saving
userSchema.pre("save", async function (next) {
  // check if password is sent or modified
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bycrypt.genSalt(10);
  // hash password with salt
  this.password = await bycrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
