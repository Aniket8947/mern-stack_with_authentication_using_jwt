const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModels');
const { getAllWorkouts,
        getSingleWorkout,
        createWorkout,
        deleteWorkout,
        updateWorkout
      } = require('../controllers/workoutControllers')
const requireAuth = require('../middlewares/requireAuth')

// Authentication for all the user accesing the data
router.use(requireAuth)


router.get('/', getAllWorkouts)
router.post('/', createWorkout)
router.get('/:id', getSingleWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', updateWorkout)

module.exports = router;