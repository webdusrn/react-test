var standards = {
    "cdn": {
        "rootUrl": "/"
    },
    "host": {
        "url": ""
    }
};

if (!this.window && module && module.exports) {
    module.exports = standards;
} else {
    if (!window.meta) window.meta = {};
    window.meta.std = standards;
}