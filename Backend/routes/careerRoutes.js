import express from 'express';
import {
  getCareers,
  getCareer,
  createCareer,
  updateCareer,
  deleteCareer,
  getCategories
} from '../controllers/careerController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getCareers);
router.get('/categories', getCategories);
router.get('/:id', getCareer);

// Admin only routes
router.post('/', protect, authorize('admin'), createCareer);
router.put('/:id', protect, authorize('admin'), updateCareer);
router.delete('/:id', protect, authorize('admin'), deleteCareer);

export default router;
