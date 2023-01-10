const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  features: {
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
     
        
    },
    {
      include: path.resolve(__dirname, "../"),
    });
    // config.resolve.plugins = config.resolve.plugins || [];
    // config.resolve.plugins.push(
    //   new JsConfigPathsPlugin({
    //     configFile: path.resolve(__dirname, "../jsconfig.json"),
    //   })
    // );
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@styles": path.resolve(__dirname, "../styles/"),
      "@atoms": path.resolve(__dirname, "../components/atoms/"),
      "@molecules": path.resolve(__dirname, "../components/molecules/"),
      "@organisms": path.resolve(__dirname, "../components/organisms/"),
    };
    return config;
  },
};


