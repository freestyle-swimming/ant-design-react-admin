# routes 文件夹说明
  
## 用途

此文件夹主要用于页面组件

## 规范

1. 每个页面对应一个文件夹
2. 所以文件夹的名称采用大驼峰形式
3. 所有页面对应的tsx文件使用index.tsx
4. 所有页面对应的 `scss` 文件与文件夹同名，且采用小驼峰命名规则，均使用css-module形式。
5. 模块内如果有可以封装的专属业务组件，则在该模块文件夹内创建 `components` 文件夹用以存放组件，`components` 内的规则同全局 `components` 文件夹规范。