const express = require("express");
const router = express.Router();
const { 
  addPost,
  getPost,
  getsinglePost,
  updatePost,
  removePost,
 } = require("../controllers/ChallengeManagementController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getPost);

//@route POST api/ads
//@desc Add an ads
router.post("/", addPost);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updatePost);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removePost);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsinglePost);

module.exports = router;
