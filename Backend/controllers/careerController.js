import Career from '../models/Career.js';

// @desc    Get all careers
// @route   GET /api/careers
// @access  Public
export const getCareers = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;

    let query = {};

    // Filter by category if provided
    if (category) {
      query.category = category;
    }

    // Search functionality
    if (search) {
      query.$text = { $search: search };
    }

    const careers = await Career.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const count = await Career.countDocuments(query);

    res.status(200).json({
      success: true,
      count: careers.length,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: careers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single career
// @route   GET /api/careers/:id
// @access  Public
export const getCareer = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id).populate('relatedCareers');

    if (!career) {
      return res.status(404).json({
        success: false,
        message: 'Career not found'
      });
    }

    res.status(200).json({
      success: true,
      data: career
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create new career
// @route   POST /api/careers
// @access  Private/Admin
export const createCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);

    res.status(201).json({
      success: true,
      data: career
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update career
// @route   PUT /api/careers/:id
// @access  Private/Admin
export const updateCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!career) {
      return res.status(404).json({
        success: false,
        message: 'Career not found'
      });
    }

    res.status(200).json({
      success: true,
      data: career
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete career
// @route   DELETE /api/careers/:id
// @access  Private/Admin
export const deleteCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);

    if (!career) {
      return res.status(404).json({
        success: false,
        message: 'Career not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Career deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get career categories
// @route   GET /api/careers/categories
// @access  Public
export const getCategories = async (req, res) => {
  try {
    const categories = await Career.distinct('category');

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
