import { request } from '@/utils/request'

// Tip：
// 1、request方法适用于普遍的GET、POST方法
// 2、instance方法适用于需要做特殊处理的请求，如：自定义Header、其他的http方法等
// 3、使用解构参数，方便阅读和管理。

// mockjs
export function getMock(info) {
    let res = request('/mock', 'post', info)
    return res
}

// images
export function getImages() {
    let res = request('/images', 'get')
    return res
}