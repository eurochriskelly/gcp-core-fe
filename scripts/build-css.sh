#!/bin/bash

set -e

dir=${1:-src}

echo "Converting all scss files in directory [$f]"
for f in $(find $dir -name "*.scss");do
  echo "Converting $f"
  npx node-sass $f --output $(dirname $f) &
done
wait

echo "Now watching..."

for f in $(find $dir -name "*.scss");do
  echo "Watching scss files in directory [$f]"
  npx node-sass --watch $(dirname $f) --output $(dirname $f) &
done

wait
