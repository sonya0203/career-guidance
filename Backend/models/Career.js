import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a career title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['Technology', 'Healthcare', 'Business', 'Arts', 'Science', 'Engineering', 'Education', 'Other']
  },
  skills: [{
    type: String
  }],
  education: {
    type: String,
    required: true
  },
  averageSalary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'USD'
    }
  },
  jobOutlook: {
    type: String,
    enum: ['Excellent', 'Good', 'Fair', 'Limited']
  },
  workEnvironment: {
    type: String
  },
  relatedCareers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Career'
  }]
}, {
  timestamps: true
});

// Index for text search
careerSchema.index({ title: 'text', description: 'text' });

export default mongoose.model('Career', careerSchema);
