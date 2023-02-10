const express = require("express")
const app = express()
const STU_ARR = [
    {id:"1",name:"孙悟空",age:18,gender:"男",address:"花果山"},
    {id:"2",name:"猪八戒",age:28,gender:"男",address:"高老庄"},
    {id:"3",name:"沙和尚",age:38,gender:"男",address:"流沙河"}
    
]
app.use(express.urlencodeed({extended:true}))
//解析json格式请求体的中间件
app.use(express.json())
//定义学生信息相关的路由
app.get("/students",(req,res)=>{
    console.log("收到students的get请求")
    //返回学生信息
    res.send(STU_ARR)
})
//定义添加学生的路由
app.post("/students",(req,res)=>{
    console.log("收到students的post请求")
    //获取学生信息
    const [name,age,gender] = req.body
    //将学生信息添加到数组
    STU_ARR.push({
        id:"4",
        name:"唐僧",
        age:16,
        gengder:"男",
        address:"女儿国"
    })
    //添加成功
    res.send({
        status:"ok",
        data:STU_ARR
    })
})
//定义删除学生的路由
app.delete()
//定义修改学生的路由
app.put()
app.listen(3000,()=>{
    console.log("服务器已经启动！")
})