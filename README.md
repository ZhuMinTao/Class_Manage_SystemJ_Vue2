# new_class_system项目开发笔记

## 安装依赖
```
npm install
```

## 启动服务器打包上线
```
npm run build
```

## DayOne

### 1.创建项目目录

- 【1】创建项目

  ~~~js
  vue create new_class_system
  ~~~

- 【2】启动项目

  ```
  npm run serve
  ```

- 【3】企业级目录

  - public //标题图标

  - src
    - api //api接口
    - assets //静态资源
      - fonts //字体
      - css //公共css
      - imgs //图片
    - filters //全局过滤器
    - components //通用小组件
    - router //路由
    - utils //工具函数
    - views //页面组件
    - App.vue //顶级根组件
    - main.js //入口文件

### 	2.使用element UI

- 【1】下载

~~~js
npm i element-ui
~~~

- 【2】引入

~~~js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.user(ElementUI)
~~~



