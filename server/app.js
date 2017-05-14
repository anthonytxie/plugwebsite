import express from 'express'

const publicPath = __dirname + '/../public'

const app = express();
app.use(express.static(publicPath));

//Middleware


export default app