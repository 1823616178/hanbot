const RSSHub = require("rsshub");

RSSHub.init({
    CACHE_TYPE: "redis",
    REDIS_URL: "redis://rymaker.cn:46823"
})