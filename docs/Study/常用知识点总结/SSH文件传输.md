## 参考文章
[ssh文件传输](https://blog.csdn.net/zhiyuan2021/article/details/126226426)

## 使用（arks项目）
- 进入服务器：
  ssh root@IP
  输入密码
  进入项目项目目录

- 上传文件：
  1. 进入本地要上传的文件中： cd  /Users/houxiaoling/workspace/Project/ARKS-FRONT
  2. 上传本地dist文件夹： scp -r dist root@IP:服务器目录