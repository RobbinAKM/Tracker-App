var express = require('express');
var mongoose = require('mongoose');
var Track=mongoose.model('Track');
var requireAuth = require('../middlewares/requireAuth');

var router =express.Router();

router.use(requireAuth);

router.get('/tracks',async (req,res)=>{
  const tracks = await Track.find({userId:req.user._id})
  res.send(tracks);
});

router.post('/tracks',async(req,res)=>{
  const {name , locations}= req.body ;

  if(!name || !locations){
    return res.status(402).send({error:"you must provide location and name"});
  }

try{
  const track=new Track({name,locations,userId:req.user._id});
  await track.save();
  res.send(track)
}catch(err){
  res.status(422).send({error:err.message})
}
});

module.exports=router;
