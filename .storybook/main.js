// main.js
const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  enableCrashReporter: false,
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // Resolve aliases
    const p1 = path.resolve(__dirname, '../src');
    const p2 = path.resolve(__dirname, '../node_modules/gcp-core-fe');
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': p1,
      '^': p2 
    };

  const scssRuleIndex = config.module.rules.findIndex(rule => rule.test && rule.test.toString().includes('scss'));
  if (scssRuleIndex !== -1) {
    // Update existing SCSS rule to enable CSS modules
    config.module.rules[scssRuleIndex] = {
      test: /\.module\.scss$/, // Target only .module.scss files for CSS modules
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // Enable CSS modules
            localIdentName: '[name]__[local]___[hash:base64:5]', // Optional: configure generated class names
          },
        },
        'sass-loader',
      ],
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules/gcp-core-fe/src/css'),
      ]
    };
  } else {
    // Add new rule for SCSS files if not exists, with CSS modules enabled
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        'sass-loader',
      ],
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules/gcp-core-fe/src/css'),
      ]
    });
  }


    // Check for JavaScript/JSX rule and update if necessary
    const jsRule = config.module.rules.find(rule =>
      rule.test && rule.test.toString().includes('(js|jsx)$')
    );
    if (!jsRule) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      });
    }

    return config;
  },
};
