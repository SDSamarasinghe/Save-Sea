const ChallengeManagement = require("../models/ChallengeManagementModel");

const addPost = (req, res) => {
  const {
    topic,
    description,
    img,
    
  } = req.body;

  const newChallengeManagement = new ChallengeManagement({
    topic,
    description,
    img,
  });

  newChallengeManagement
    .save()
    .then((createdAds) => {
      res.json(createdAds);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPost = async (req, res) => {
  try {
    const ads = await ChallengeManagement.find();
    res.json(ads);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const ad = await ChallengeManagement.findById(id);
    res.status(200).json(ad);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updatePost = async (req, res) => {
  const advID = req.params.id;
  try {
    const id = await ChallengeManagement.findById(advID);

    if (!id) {
      return res.status(404).json("There is no Ad");
    }

    const {
        topic,
        description,
        img,
      
    } = req.body;
    const adsr = await ChallengeManagement.findByIdAndUpdate(advID, {
        topic,
        description,
        img,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removePost = async (req, res) => {
  const adID = req.params.id;

  try {
    const ad = await ChallengeManagement.findById(adID);
    if (!ad) {
      return res.status(404).json("There is no Ad to remove");
    }

    const removedAds = await ChallengeManagement.findByIdAndDelete(adID);
    res.status(200).json(removedAds);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addPost,
  getPost,
  getsinglePost,
  updatePost,
  removePost,
};
