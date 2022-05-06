const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, "./storage/images")
    },
    filename: function (req,file, cb){
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({storage})

module.exports = upload;