### 1.初始化项目(myapp表示项目名称)
    express --view=pug myapp

### 2.运行项目
    npm start

### 踩坑记录
#### 1.关于jwt6.0.0版本algorithms should be set报错的解决方案
只需要增加一条algorithms的设置就可以了,[参考链接](https://copyfuture.com/blogs-details/202007091338542617f9kipfuk4035p1)

#### 2.数据库Navicat for MySQL连接报1251
    第一步：找到mysql的Client
    第二步：输入mysql密码回车    就是安装mysql时设置的密码只输入密码就行不加分号
    第三步：输入ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql的密码';回车 别漏了后面有个分号（mysql的密码是安装mysql时设置的密码）
    第四步：输入FLUSH PRIVILEGES;回车  别漏了后面的分号