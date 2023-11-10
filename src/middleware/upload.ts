const multer = require('multer');
// const path = require('path');

// const publicDir = path.join(__dirname, "./../../public");
// const uploadDir = path.join(publicDir, "uploads");

const storage = multer.memoryStorage();
// const storage = multer.diskStorage();

module.exports = multer({storage});