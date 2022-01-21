import express from "express";
import morgan from "morgan";
import res from "express/lib/response";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
const app=express();
const logger=morgan("dev");
const PORT=4000;
app.set("view engine","pug")
app.set("views",process.cwd()+"/src/views");
app.use(logger);
app.use("/",globalRouter);
app.use("/user",userRouter);
app.use("/video",videoRouter);

const handleListening = () => console.log(`Server hosting http://localhost:${PORT}`);
app.listen(PORT,handleListening)
