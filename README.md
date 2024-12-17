# 数字人官网

这是一个使用 Vue 3 + Node.js 开发的数字人官网测试仓库。项目采用现代化的前端技术栈，参考百度希凌云官网的布局和效果进行开发。

## 推荐的开发环境设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (请禁用 Vetur)。

## TypeScript 的 `.vue` 导入类型支持

由于 TypeScript 默认无法处理 `.vue` 导入的类型信息，我们使用 `vue-tsc` 替代 `tsc` CLI 进行类型检查。在编辑器中，需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来使 TypeScript 语言服务识别 `.vue` 类型。

## 项目技术栈

- Vue 3 + TypeScript
- Vite 构建工具
- Vue Router 路由管理
- Pinia 状态管理
- ESLint + Prettier 代码规范

## 自定义配置

查看 [Vite 配置参考](https://cn.vitejs.dev/config/)。

## 项目结构

```
web/
├── src/                    # 源代码目录
│   ├── assets/            # 静态资源
│   ├── components/        # 组件
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia 状态管理
│   ├── views/             # 页面视图
│   ├── App.vue           # 根组件
│   └── main.ts           # 入口文件
├── public/                # 公共资源
└── ...配置文件
```

## 项目设置

### 安装依赖

```sh
npm install
```

### 开发环境运行（支持热重载）

```sh
npm run dev
```

### 生产环境构建（类型检查、编译和压缩）

```sh
npm run build
```

### ESLint 代码检查

```sh
npm run lint
```

## 开发规范

- 使用 Vue 3 组合式 API
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 和 Prettier 的代码规范
- 组件和代码注释使用中文

## 参考设计

本项目参考 [百度希凌云官网](https://xiling.cloud.baidu.com/) 的设计和布局进行开发。
