const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid").v1;
mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    // orders: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Car" }],
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    profilePhoto: {
      data: Buffer,
      contentType: String,
      required: false,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
  );

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(() => {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
