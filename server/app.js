const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST']
}));

mongoose.connect("mongodb://0.0.0.0:27017/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
  console.log("DB Connected");
})
.catch(()=>{
  console.log("Error");
})

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

//import routes from directory
const authRoutes = require("./router/auth");

//route middlewares
app.use(authRoutes);


// app.post("/transfer", async (req, res) => {
//   console.log(req.body);
//   try {
//     const { mytoken, receiver_address } = req.body;
//     const tokens = new allToken({ mytoken, receiver_address });

//     await tokens.save();
//     res.json({ message: "token added" });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/recieve", async (req, res) => {
//   console.log(req.body);
//   try {
//     const myReceiver_address = await allToken.find({
//       receiver_address: req.body.receiver_address,
//     });
//     res.status(201).json(myReceiver_address);
//     //
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// app.post("/accept", async (req, res) => {
//   console.log(req.body);
//   try {
//     allToken.deleteOne(
//       { receiver_address: req.body.receiver_address },
//       function (err, obj) {
//         if (err) throw err;
//         console.log("1 document deleted");
//       }
//     );

//     //res.status(201).json(myReceiver_address);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });


// app.post("/mint", async (req, res) => {
//   console.log(req.body.collection);
//   const { collectionName } = req.body;
//   //console.log(req.body);

//   try {
//     // const collectionExist = await nftcollection.find({ myCollection:collectionName });
//     // console.log(collectionExist)
//     // if (collectionExist) {
//     //   console.log("Token already exist");
//     // }
  
//     const collect = new nftcollection({collectionName} );
//     await collect.save();
    

//     res.status(201).json({ message: `You have created nft in successfully` });
//   } catch (err) {
//     console.log(err);
//   }
// });


app.listen(8000, () => {
  console.log("Database started at port 8000");
});
