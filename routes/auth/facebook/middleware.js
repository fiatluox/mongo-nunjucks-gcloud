module.exports = function(){
  return function(req, res, next){
    console.log('this is facebook middleware.js');
    return next();
  }
}
