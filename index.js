const port = process.env.PORT || 4000;
var express=require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token,Authorization');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});

app.use('/movie', require('./routes/movie_route'));


data = {
    success:true,
    msg: "Welcome on Movie Service",
  };
  
app.route("/").get((req, res) => res.json(data)); 


// app.route("/images").get(async(req,res)=>{
//   for(var x=1;x<3;x++){
//     var response=await axios.get("https://api.pexels.com/v1/curated?per_page=10&page="+x,{
//       headers:{
//         "Authorization":"563492ad6f917000010000014e26f7be85a9468489bccb8d44c58b66"
//       }});
//      for(var i=0; i<response.data.photos.length;i++){
//        var image={
//          id:response.data.photos[i].id,
//          width:response.data.photos[i].width,
//          height:response.data.photos[i].height,
//          url:response.data.photos[i].url,
//          photographer:response.data.photos[i].photographer,
//          photographer_url:response.data.photos[i].photographer_url,
//          photographer_id:response.data.photos[i].photographer_id,
//          avg_color:response.data.photos[i].avg_color,
//        }
//        await imageRepo.insert_image(image);
//        var image_source={
//           image_id:response.data.photos[i].id,
//           original:response.data.photos[i].src.original,
//           large2x:response.data.photos[i].src.large2x,
//           large:response.data.photos[i].src.large,
//           medium:response.data.photos[i].src.medium,
//           small:response.data.photos[i].src.small,
//           portrait:response.data.photos[i].src.portrait,
//           tiny:response.data.photos[i].src.tiny
//        }
//        await imageRepo.insert_source(image_source);
//      }  
//   }
//   return res.json({"status":"record inserted"});
// });


var server=app.listen(port, "0.0.0.0", () =>
console.log(`welcome your listening at port ${port}`)
);