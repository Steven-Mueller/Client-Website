import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import "dotenv/config";

// Server
const server = express();

// env
const CLIENT_ID = process.env.CLIENT_ID;
const AUTH = process.env.AUTH;
const MONGO = process.env.MONGO;
const PORT = process.env.PORT;

// Connect to DB
async function connectToDB() {
  try {
    const connected = await mongoose.connect(MONGO);
    if (connected) {
      console.log("Successfully connected to DB !");
    }
  } catch (err) {
    console.log("Connection to server failed !");
  }
}

connectToDB();

// Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(cookieParser());

// Routes
server.get("/", (req, res) => {
// Make fetch to twitch api ...
async function fetchData() {
    try {
      const response = await fetch(
        "https://api.twitch.tv/helix/streams?user_id=543116171",
        {
          method: "GET",
          headers: {
            "Client-Id": `${CLIENT_ID}`,
            "Authorization": `Bearer ${AUTH}`,
          },
        }
      );
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
});

// Start server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
