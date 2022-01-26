import video from "../models/video";
export const home = async(req,res) => {
    const videos = await video.find({});
    return res.render("home",{Pagetitle:"Home",videos});
};
export const watch = async(req,res) => {
    const {id} = req.params;
    const videos = await video.findById(id);
    if(!videos){
        return res.render("404",{Pagetitle:"Video not Found"});    
    }
    return res.render("watch",{Pagetitle:videos.title,videos});
   
};

export const remove = (req,res) => {
    return res.send("remove video");
};
export const getEdit=async(req,res) => {
    const {id} = req.params;
    const videos=await video.findById(id);
    if(!videos){
        return res.render("404",{Pagetitle:"Cannot Edit"});    
    }
    return res.render("edit",{Pagetitle:`Edit: ${videos.title}`,videos});
   
};
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