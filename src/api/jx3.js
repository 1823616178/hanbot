import request from "../utils/request";

/***
 * 查询当天的日常，周常等信息。
 * @param query
 * @returns {AxiosPromise}
 */
export function daily(query) {
    return request({
        url: "/jx3/daily",
        method: "POST",
        params: query
    })
}

/***
 * 检查服务器是否开启
 * @param query
 * @returns {AxiosPromise}
 */
export function checkServer(query) {
    return request({
        url: "/jx3/chack",
        method: 'post',
        params: query
    })
}
