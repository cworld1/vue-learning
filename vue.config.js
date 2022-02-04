// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js', // page 的入口
        }
    },

    lintOnSave: false, // 关闭语法检查

    devServer: {
        // 开启代理服务器（方式1）
        // proxy: 'http://localhost:5000' // 开启代理服务器

        // 开启代理服务器（方式2）
        /* proxy: {
            '/studentApi': {
                target: 'http://localhost:5000',
                pathRewrite: { "^/studentApi": "" },
                // ws: true, // 用于支持websocket
                changeOrigin: true // 用于控制请求头中的host值，是否需要与请求服务器相同
            },
            '/carApi': {
                target: 'http://localhost:5001',
                pathRewrite: { "^/carApi": "" },
                // ws: true, // 用于支持websocket
                changeOrigin: true // 用于控制请求头中的host值，是否需要与请求服务器相同
            }
        }, */
    }
}