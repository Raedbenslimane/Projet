const picture = require("../Models/MovieModel");
const cloudinary = require("./Cloudinary");

const AddPic = async (req, res) => {
  try {
    const savedImage = await cloudinary.uploader.upload(
      req.files.Img.tempFilePath
    );
    const newImage = await picture.create({
      Img: { public_id: savedImage.public_id, imgUrl: savedImage.url },
    });
    res.json(newImage);
  } catch (error) {
    res.status(504).json({ message: error });
  }
};
module.exports = { AddPic };
