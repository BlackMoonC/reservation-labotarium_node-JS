import express, {Express, Request, Response} from 'express'
const PORT = 8000;

const app: Express = express();

app.get("/", (req:Request, res:Response) => {
    console.log("Jalan")
 res.send("Rakhel Cakrassss")
})

app.listen(PORT, () => {
    console.log('now listening on port https' + PORT)
})