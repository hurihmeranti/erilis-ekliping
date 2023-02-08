const multer = require('multer')

function fullDate(time) {

        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktobebr", "November", "Desember"];
    
        let date = time.getDate();
      
        let monthIndex = time.getMonth();
        
        let year = time.getFullYear();
       
        let hours = time.getHours();
      
        let minutes = time.getMinutes();
      
        return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "uploads")
    },
    filename : function(request, file, callback){
        callback(null, fullDate.time() + "-" + file.originalname)
    }
})

const upload = multer({storage});

module.exports = upload;