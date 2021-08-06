const axios = require('axios');
module.exports={
   get_top_rated:async(page)=>{
      var data=await axios.get("https://api.themoviedb.org/3/movie/top_rated?"+
      "api_key=b42f1d2342c381ec25f6180c52e51c00&language=en-US&page="+page);
      return data.data;
   },
   get_popular:async(page)=>{
    var data=await axios.get("https://api.themoviedb.org/3/movie/popular?"+
    "api_key=b42f1d2342c381ec25f6180c52e51c00&language=en-US&page="+page);
    return data.data;
   }
}