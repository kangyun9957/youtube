import video from "../models/video";
export const home = (req,res) => {
    video.find({},(error,videos)=>{
        console.log("error",error);
        console.log("videos",videos);
    });
    return res.render("home",{Pagetitle:"Home",videos:[]});
};
export const watch = (req,res) => {
    return res.render("watch",{Pagetitle:"Watch"});
};
export const edit = (req,res) => {
    return res.send("watch video");
};
export const remove = (req,res) => {
    return res.send("remove video");
};
export const upload = (req,res) => {
    return res.send("upload video");
};