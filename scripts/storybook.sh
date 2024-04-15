#!/bin/bash

# Switch to the directory of the script
#
#
PORT=${1:-6006}

echo "Copying over storybook folder..."
if [ -d .storybook ]; then
  echo "Removing storybook folder..."
  rm -rf .storybook
fi
echo "Copying over storybook folder..."
cp -r node_modules/gcp-core-fe/.storybook .

echo "Running storybook"
storybook dev -p $PORT
