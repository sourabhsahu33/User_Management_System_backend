import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('MONGODB_URI=mongodb+srv://user123:sourabh@cluster0.t6kxsum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);  // Ensure this is cast to ConnectOptions
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

connectDB();
