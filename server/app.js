const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

dotenv.config();// It loads the .env files
connectDB();

const app = express();
const PORT = process.env.PORT || 8005;
app.get('/',(req,res)=>{
  res.send("Working Properly")
})

app.use(cors());

app.use(express.json());

app.use("/authapi", authRoutes);//This authRoutess will take to the routes folder

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
