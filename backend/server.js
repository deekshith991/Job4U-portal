console.log("[+] Initializing the Server ");

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const Db_name = process.env.DB_NAME || "DEV_DB";
const MongoUri =
  process.env.MONGO_URI || `mongodb://localhost:27017/${Db_name}`;
const port = process.env.PORT || 3333;
