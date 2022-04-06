rm -rf build
yarn build
cd build 
git init
git add .
git commit -m "deploy"
git remote add gitee git@gitee.com:xmix/dobby-react.git
git push gitee master -f
git remote add github git@github.com:TravisWongX/dobby-react.git
git push github master -f
cd -