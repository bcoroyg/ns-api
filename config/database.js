import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connection db");
    } catch (error) {
        console.log("error connection");
    };
};

export default connectDB;