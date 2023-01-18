const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const multer=require('multer');
const cors=require('cors');
const fs=require('fs');
const ImageModel=require('./models');
const app=express();
const port=3001;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://aman0329:Hr02ab2016@cluster0.mgnl9.mongodb.net/imageData?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});//27017 we get from mongodb compass
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connecion error'));
db.once('open',function(){
    console.log("we are connected")
});


app.get('/',(req,res)=>{
    res.send("hello")
})
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})
app.post('/',upload.single('testImage'),(req,res)=>{
    const saveImage= new ImageModel({
        name:req.body.name,
        img:{
            data:fs.readFileSync('uploads'+ req.file.filename),
            contentType:"image/png"
        }
    })
    saveImage.save()
    .then((res)=>{console.log('image saves')})
    .catch((err)=>{console.log(err,'error has occurred')})
});
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})