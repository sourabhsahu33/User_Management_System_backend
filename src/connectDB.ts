import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://user123:sourabh@cluster0.t6kxsum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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
