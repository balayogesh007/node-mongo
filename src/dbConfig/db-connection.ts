import "dotenv/config";
import mongoose from "mongoose";

export class MongoDbConnection {
  constructor() {
    this.connectDB();
  }

  private async connectDB() {
    const mongoDBConnectionURI = process.env.MONGO_DB_URI as string;
    try {
      await mongoose.connect(mongoDBConnectionURI, {
        serverSelectionTimeoutMS: 5000, // Retry connection for 5 seconds
        connectTimeoutMS: 10000
      });
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB failed to connect.", error);
    }
  }
}
