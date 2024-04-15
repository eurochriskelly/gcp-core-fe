#!/bin/bash

echo "Copying over storybook folder..."
if [ -d .storybook ]; then
  echo "Removing storybook folder..."
  rm -rf .storybook
fi
echo "Copying over storybook folder..."
cp -r node_modules/gcp-core-fe/.storybook .

echo "Setting up css ..."
if [ -f ./tailwind.config.js ];then
  rm tailwind.config.js
fi
cp -r node_modules/gcp-core-fe/tailwind.config.js .
if [ -f ./postcss.config.js ];then
  rm postcss.config.js
fi
cp -r node_modules/gcp-core-fe/postcss.config.js .

echo "Setting up dependencies..."
npm install react react-dom react-router-dom js-yaml
npm install -D \
  html-webpack-plugin tailwindcss storybook postcss \
  babel-cli babel-loader \
  @babel/cli @babel/core @babel/preset-env @babel/preset-react \
  @parcel/transformer-inline-string @parcel/transformer-sass \
  sass-loader css-loader style-loader sass @storybook/preset-scss \
  storybook @storybook/addon-actions @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links \
  @storybook/addon-onboarding @storybook/addon-viewport @storybook/blocks @storybook/react @storybook/react-vite @storybook/react-webpack5 @storybook/test
