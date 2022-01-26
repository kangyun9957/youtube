import video from "../models/video";
export const home = async(req,res) => {
    const videos = await video.find({});
    return res.render("home",{Pagetitle:"Home",videos});
};
export const watch = (req,res) => {
    return res.render("watch",{Pagetitle:"Watch"});
};

export const remove = (req,res) => {
    return res.send("remove video");
};
export const getEdit=(req,res)=>{
    return res.render("getEdit",{Pagetitle:"Edit video"});
}
export const postEdit=(req,res)=>{
    
}
export const getUpload=(req,res)=>{
    return res.render("upload",{Pagetitle:"Upload Video"});
}
export const postUpload=async(req,res)=>{
    const{ title,description,hashtags}=req.body;
    try{
    await video.create({
        title,
        description,
        hashtags: hashtags.split(",").map((word) => `#${word}`),
      });
      return res.redirect("/");
    }
    catch(error){
      return res.render("upload",{Pagetitle:"Upload Video",errormessage:error._message});
    }
      console.log(video);
   
}