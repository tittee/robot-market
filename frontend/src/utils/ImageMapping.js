export const imageMappings = (image) => {
  try {
    let imagePath = require('assets/images/suhas.jpg');
    if (image) {
      imagePath = image;
    }

    return imagePath;
  } catch (err) {
    return null;
  }
};
