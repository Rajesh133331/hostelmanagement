const Razorpay = require("razorpay");
require("dotenv").config();
const razorpay = new Razorpay({
  key_id: process.env.razorpaykeyid,
  key_secret: process.env.razorpaykey,
});
module.exports = { Razorpay, razorpay };