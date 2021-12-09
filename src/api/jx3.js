import request from "../utils/request";

/***
 * 查询当天的日常，周常等信息。
 * @param query
 * @returns {AxiosPromise}
 */
export function daily(query) {
    return request({
        url: "/app/daily",
        method: "POST",
        data: query
    })
}
