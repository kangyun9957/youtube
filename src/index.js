import express from "express";
import morgan from "morgan";
import res from "express/lib/response";
const app=express();
const logger=morgan("dev");
const PORT=4000;

const handlehome = (req,res) => {
    return res.send("sex");
};

const handlelogin = (req,res) => {
    return res.send("login");
}; 
app.use(logger);
app.get("/",handlehome);
app.get("/login",handlelogin);
const handleListening = () => console.log(`Server hosting http://localhost:${PORT}`);
app.listen(PORT,handleListening)
