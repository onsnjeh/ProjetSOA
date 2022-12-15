const express = require("express");//cos we need express router
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controller/userControllers")

router.route('/')
  .post(registerUser)
  .get(getUsers)
router.post(authUser)
router
  .route('/profile')
  .get(getUserProfile)
  .put(updateUserProfile)
router
  .route('/:id')
  .delete(deleteUser)
  .get(getUserById)
  .put(updateUser)

module.exports = router;