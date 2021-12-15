import request from "../../utils/request";

/***
 * UP 主投稿
 * @param query
 * @returns {AxiosPromise}
 */
export function upUserPush(query) {
    return request({
        url: "/bilibili/user/video/" + query.uid + '/',
        method: "get",
    })
}

/***
 * UP 主动态
 * @returns {AxiosPromise}
 */
export function upUserDynamic(query) {
    return request({
        url: "/bilibili/user/dynamic/" + query.uid + '/',
        method: 'get'
    })
}

/***
 * 分区视频
 * @param query
 * @returns {AxiosPromise}
 */
export function partVideo(query) {
    return request({
        url: "/bilibili/partion/" + query.id,
        method: "get"
    })
}

