const CracoAlias = require("craco-alias");
const CracoLessPlugin = require('craco-less');
const path = require("path")

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: path.resolve(__dirname, 'src/'),
        aliases: {
          '@': path.resolve(__dirname, 'src/'),
        }
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' }, // 自定义 Less 变量
            javascriptEnabled: true, // 启用 JavaScript 在 Less 文件中的执行
          },
        },
      },
    },
  ],
  style: {
    modules: {
      localIdentName: '[local]__[hash:base64:5]', // 自定义类名生成规则
    },
  },
  // webpack: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/'),
  //   },
  // },
  devServer: {
    port: 1888,
    proxy: {
      '/api': {
        target: 'https://www.apple.com.cn', // 后端服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/', // 将 '/api' 前缀去掉
        },
        // onProxyReq: (proxyReq, req, res) => {
        //   // 在这里可以对请求进行一些自定义操作
        //   console.log('Request sent to backend:', req.url);
        // },
        // onProxyRes: (proxyReq, req, res) => {
        //   // 在这里可以对响应进行一些自定义操作
        //   console.log('Response received from backend:', res.statusCode);
        // },
      }
    },
    // 其他配置...
  },
};
