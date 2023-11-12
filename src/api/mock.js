import Mock from 'mockjs'
//定义mock请求拦截
Mock.mock('/api/home/getData', 'get', function () {
    console.log('我的发！！！')
})