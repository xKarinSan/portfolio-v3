import express,{ Application, Router ,Request, Response} from "express";

const app :Application = express();
var router :Router= require('express').Router();
const port :number = 3000;
app.use(router);

router.get("/", function (req:Request, res:Response) : void {
    res.send("Hello world");
  });
  
app.listen(port, () => {
    console.log(`Server Running here 👉 http://localhost:${port}`);
})