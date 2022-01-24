import express from "express";
import morgan from "morgan";
import "./db"
import "./models/video";
import res from "express/lib/response";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
const app=express();
const logger=morgan("dev");
app.set("view engine","pug")
app.set("views",process.cwd()+"/src/views");
app.use(logger);
app.use("/",globalRouter);
app.use("/user",userRouter);
app.use("/video",videoRouter);

export default app;