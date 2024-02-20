import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://daviddurotola:ajoopassword@ajooapp.jyyyykj.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useCreateIndex: true,
    });

    console.log(`It works ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }  
};

export default connectDB;