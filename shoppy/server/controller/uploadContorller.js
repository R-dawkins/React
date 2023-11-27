import multer from 'multer'

/* 
  파일 업로드 : 파일을 /uploads 폴더에 저장하는 작업
*/
//multer 라이브러리를 이용한 파일 업로드 처리
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '_' + file.originalname)
    // cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const fupload = multer({ storage: storage }).single('file')

export function upload(req,res){
  fupload(req,res,err =>{
    console.log(req.file.path);

    res.json(req.file);

  })

  //db연동이 아니라 폴더에 저장이라 async를 빼도 됨
  
}