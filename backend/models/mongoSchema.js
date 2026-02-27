const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    console.log("connect successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const adminuserSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Status: {
    type: Boolean,
    default: true,
  },
});

const otpSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Passcode: { type: Number, required: true },
  Count: { type: Number, required: false },
});

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Room: { type: Number, required: true },
  Branch: { type: String, required: true },
  College: { type: String, required: true },
  JoinDate: { type: Date, required: true },
  PhoneNumber: { type: String, required: true, unique: true },
  Id:{ type: Number, required: true,unique: true }
});

const paymentSchema = new mongoose.Schema({
  PhoneNumber: { type: String, required: true },
  Month: { type: String, required: true },
  Date: { type: Date, required: true },
  Amount: { type: String, required: true },
  TransactionId: { type: String, required: true },
  Mode: { type: String, required: true },
});

const vacateSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Room: { type: Number, required: true },
  Branch: { type: String, required: true },
  College: { type: String, required: true },
  JoinDate: { type: Date, required: true },
  PhoneNumber: { type: String, required: true, unique: false },
  VacateDate: { type: Date, required: false, default: new Date() },
});

const signupuserSchema = new mongoose.Schema({
  PhoneNumber: { type: String, required: true },
  Passcode: { type: String, required: true },
});

const onlinepaymentSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "created",
  },
  receipt: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
});

//payment link generation
const paymentlinkSchema = new mongoose.Schema({
  PhoneNumber: {
    type: String,
    required: true,
  },

  StudentName: {
    type: String,
    required: true,
  },

  Month: {
    type: String,
    required: true,
  },

  Year: {
    type: Number,
    required: true,
  },

  Amount: {
    type: Number,
    required: true,
  },

  Token: {
    type: String,
    required: true,
    unique: true,
  },

  UTR: {
    type: String,
    required: false,
    unique: true,
    sparse: true, // allows multiple null values
  },

  Status: {
    type: String,
    required: true,
    default: "pending", // pending | verification_pending | paid | rejected
  },

  CreatedAt: {
    type: Date,
    default: Date.now,
  },

  VerifiedAt: {
    type: Date,
    required: false,
  },
});

const adminuser = mongoose.model("AdminUsers", adminuserSchema);
const otpverify = mongoose.model("otps", otpSchema);
const user = mongoose.model("Users", userSchema);
const payment = mongoose.model("Payments", paymentSchema);
const vacate = mongoose.model("Vacatedetailslist", vacateSchema);
const signupuser = mongoose.model("usersignupdetails", signupuserSchema);
const onlinepayment = mongoose.model("OnlinePayments", onlinepaymentSchema);
const paymentlink = mongoose.model("PaymentLinks", paymentlinkSchema);

module.exports = {
  adminuser,
  otpverify,
  user,
  payment,
  vacate,
  signupuser,
  onlinepayment,
  paymentlink
};
