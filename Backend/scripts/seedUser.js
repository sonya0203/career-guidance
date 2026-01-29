import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import connectDB from '../config/db.js';

// Load environment variables
dotenv.config();

const seedUser = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email: 'sanay0203@demo.com' });

    if (existingUser) {
      console.log('✅ Dummy user already exists!');
      console.log('Email: sanay0203@demo.com');
      console.log('Password: sanay0203');
      process.exit(0);
    }

    // Create dummy user
    const dummyUser = await User.create({
      name: 'Sanay Demo User',
      email: 'sanay0203@demo.com',
      password: 'sanay0203',
      role: 'user',
      interests: ['Technology', 'Education', 'Career Development']
    });

    console.log('✅ Dummy user created successfully!');
    console.log('-----------------------------------');
    console.log('Email: sanay0203@demo.com');
    console.log('Password: sanay0203');
    console.log('User ID:', dummyUser._id);
    console.log('-----------------------------------');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding user:', error.message);
    process.exit(1);
  }
};

seedUser();
