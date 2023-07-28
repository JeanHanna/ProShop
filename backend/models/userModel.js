import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requires: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdimin: {
    type: Boolean,
    requires: true,
    default: false,
  },
},{timestamps:true,
});

const User = mongoose.model("User", userSchema);

export default User;
