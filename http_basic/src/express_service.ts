import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";

dotenv.config();

const app = express();

const port = process.env.PORT;


//restful风格
// 1. get请求
// 2. post请求
// 3. put请求
// 4. delete请求

app.use((req,res,next)=>{
  console.info(`[INFO] ${new Date().toISOString()} - ${req.method} - ${req.url}`);
  next();
})

/**
 * 如果请求体是json格式，则使用bodyParser.json()解析 json格式是请求体是json格式的默认格式
 * 如果请求体是urlencoded格式，则使用bodyParser.urlencoded()解析 urlencoded格式是表单提交的默认格式
 * 如果请求体是text格式，则使用bodyParser.text()解析
 * 如果请求体是raw格式，则使用bodyParser.raw()解析 
 * 如果请求体是form-data格式，则使用bodyParser.formData()解析
 * 如果请求体是binary格式，则使用bodyParser.binary()解析 
 */
app.use(bodyParser.json());

// 静态资源托管
app.use(express.static('public'));

app.use(cors({
  origin: `http://localhost:4000`,
}));


app.use(session({
  secret:"secret-key",
  resave:false,
  saveUninitialized:true, // 是否保存未初始化的会话
  cookie:{
    secure:false, // true ,https 才有效
  },
}));

app.get('/user',(req,res)=>{
  console.log(req.session);
  res.send("user");
})

app.get('/user/list',(req,res)=>{
  res.send(`user list`);
})

app.get('/user/detail',(req,res)=>{
  res.send(`user detail`);
})

app.post('/',(req,res)=>{
  res.send("Hello World");
})
app.put('/',(req,res)=>{
  res.send("Hello World");
})
app.delete('/',(req,res)=>{
  res.send("Hello World");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});