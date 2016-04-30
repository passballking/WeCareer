"# WeCareer"

这是我的 WeCareer 的成果展示，该项目在 myEclipse-tomcat8 和 我之前一个版本的 nodejs-http-server 上运行通过，不过最新的 nodejs http-server 经常容易crash，所以不推荐使用（也许是我自己电脑问题？）

说明：

1. 本项目采用 Angularjs-Bootstrap。为了最小化文件，所有 angularjs 和 bootstrap 组件链接改为 官方cdn 地址

2. 模拟数据有两类： a.aa.json(就是 jobs.json) b. 1,2,3....12.json(每一个公司的具体信息作为json)

3. 采用 $http 异步从模拟数据中获得数据，模拟前后端分离的做法

4. 为了 job detail 的地址的方便，在 jobs.json 里面每一个 job 增加一个 “jobid” 作为url 地址

5. 搜索栏的第二项目前没有作用，因为我根据项目要求估计地址的搜索是从后端做的，可能还要添加一些算法，拿到的就是 jobs.json文件

6. 成果视频链接 https://drive.google.com/open?id=0B2kVgtukf2pUSFFjM0NXWEg0dFk

