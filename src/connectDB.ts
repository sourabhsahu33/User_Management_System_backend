import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);  // Cast to ConnectOptions
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);  // Exit process with failure
  }
};

connectDB();
