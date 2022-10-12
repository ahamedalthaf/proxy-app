var config = {
  devServer: {
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "https://sampledomain.com/", // Replace this value with original domain to redirect the API request
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader(
            "Cookie",
            "_helpkit_session=${Replace-this-with-your-site-cookie}" // Make sure you replace the cookie value from the above domain
          );
        },
      },
      "/a": {
        changeOrigin: true,
        target: "http://localhost.freshdesk-dev.com:4200/", // Local Freshdesk Frontend Ember server
      },
    }
  },
  entry: "./src/app.js",
};
module.exports = config;