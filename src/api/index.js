import http from '../utils/request'

export const getData = () => {
    //返回promise对象
    return http.get('./home/getData')
}