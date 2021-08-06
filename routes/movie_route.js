var movieController=require('../controller/movie_controller');
const router = require('express-promise-router')();

router.route("/top_rated/:page").get(movieController.get_top_rated);
router.route("/popular/:page").get(movieController.get_popular);
module.exports=router;