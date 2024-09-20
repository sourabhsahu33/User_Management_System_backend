import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/user_management', {
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
