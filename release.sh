#!/usr/bin/env bash

rm -rf dist
rm -rf docs
npm run build
cp -r dist/ docs
sed -i 's/href=\//href=/g' docs/index.html
sed -i 's/src=\//src=/g' docs/index.html
