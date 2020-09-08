const express = require('express')
const router = express.Router()
var config = require('./config')
var url = require('url')
var homehot = require('./data/home/hotdata')
var searchData = require('./data/search')
var detailsData = require('./data/details')
var commentData = require('./data/comment')
var orderComment = require('./data/order')

router.get(config.homehot1,(req,res)=>{
    // get请求接收城市作为参数
    var cityName = url.parse(req.url,true).query.city
    console.log('城市： '+cityName)
    res.send(homehot.hot1)
})

router.get(config.homehot2,(req,res)=>{
    // get请求接收城市作为参数
    var cityName = url.parse(req.url,true).query.city
    console.log('城市： '+cityName)
    res.send(homehot.hot2)
})

// 搜索接口
router.get('/search', (req,res)=>{
    // 接受城市参数：city,searchContent
    var cityName = url.parse(req.url,true).query.city
    var searchContent = url.parse(req.url,true).query.content
    var page = url.parse(req.url,true).query.page
    console.log('城市：'+cityName,'搜索内容：'+searchContent,'页码：'+page )
    res.send(searchData)
})
// 详情接口
router.get('/details',(req,res)=>{
    var id = url.parse(req.url,true).query.id
    console.log('id:'+id)
    res.send(detailsData)
})

// 评价接口
router.get('/comment',(req,res)=>{
    var id = url.parse(req.url,true).query.id
    var page = url.parse(req.url,true).query.page
    console.log('id:'+id,'page:'+page)
    res.send(commentData)
})

// 订单评论接口 购物车
router.get('/car',(req,res)=>{
    var user = url.parse(req.url,true).query.user
    console.log('用户:'+user)
    res.send(orderComment)
})

// 订单提交评价接口
router.post('/ordercomment',(req,res)=>{
    var info = req.body.info
    console.log('评价信息：'+info)
    res.send({msg:'提交成功'})
})
module.exports = router