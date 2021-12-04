const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#34445c",
              "@menu-dark-bg": "#f0f2f5",
              "@btn-primary-color": "red",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
