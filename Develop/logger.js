const logger = (req,res,next)=>{
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
}

module.exports = logger;