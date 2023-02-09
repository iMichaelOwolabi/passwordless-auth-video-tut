import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONNECTION_URL}/${process.env.DB_NAME}`);
    console.log('Connected to database successfully');
  } catch (err) {
    console.error(err);
  }

  mongoose.connection.on('error', (err) => {
    console.log(err)
  });
}
