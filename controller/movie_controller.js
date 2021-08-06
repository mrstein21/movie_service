var movieUseCase=require("../usecase/movie_usecase");
module.exports={
   get_top_rated:async(req,res)=>{
       try{
         var data=await movieUseCase.get_top_rated(req.params.page)
         return res.json(data);
       }catch(e){
           return res.status(500).json({
               "success":false,
               "message":"Terjadi Kesalahan pada server",
               "error":e.toString()
           });
       }
   },
   get_popular:async(req,res)=>{
    try{   
      var data=await movieUseCase.get_popular(req.params.page);
      return res.json(data);
    }catch(err){
        return res.status(500).json({
            "success":false,
            "message":"Terjadi Kesalahan pada server",
            "error":err.toString()
        });
    }
   }
}