# 构建项目
yarn build

# 创建 .surgeignore 文件，忽略不必要的文件
echo "node_modules" > .surgeignore
echo "build/static/js/*.map" >> .surgeignore

# 部署项目到 surge
surge ./build cjz-website.surge.sh