const express = require('express')
const router = require('./router')
const app = express()
// post 接口的配置
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

// get可直接使用
app.use('/api',router)

app.listen(3300,() => {
    console.log('已启动')
})