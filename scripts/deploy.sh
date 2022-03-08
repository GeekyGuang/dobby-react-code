#!/usr/bin/env bash

rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:TravisWongX/dobby-react.git &&
git push -u origin master -f
cd -