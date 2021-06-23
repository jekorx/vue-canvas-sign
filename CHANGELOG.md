# 更新日志

#### 2.0.6 (2021-06-22)

* index.d.ts
* remove ICanvasSign in package

#### 2.0.5 (2021-06-21)

* 修复画布存在于position的dom中时，导致轨迹偏移计算错误的问题

#### 2.0.2 (2021-06-21)

* 修复publish后types缺失的问题

#### 2.0.1 (2021-06-21)

* add install function with plugin
* add types

#### 2.0.0 (2021-06-18)

* 修复在某些布局情况下，绘制轨迹偏移计算错误的问题
* 升级为vue@3.x版本
* 基于vite@2.x开发
* vue@2.x版本请使用 [![vue-canvas-sign@1.0.5](https://img.shields.io/badge/npm%20vue--canvas--sign-v1.0.5-blue)](https://www.npmjs.com/package/vue-canvas-sign/v/1.0.5)，Github v1.x地址 [![github 1.x](https://img.shields.io/badge/github%20vue--canvas--sign-1.x-green)](https://github.com/jekorx/vue-canvas-sign/tree/1.x)

#### 1.0.5 (2021-06-21)

* 修复画布存在于position的dom中时，导致轨迹偏移计算错误的问题

#### 1.0.4 (2021-06-18)

* 修复在某些布局情况下，绘制轨迹偏移计算错误的问题

#### 1.0.3 (2021-06-09)

* 升级yarn.lock开发依赖，对功能无影响

#### 1.0.2 (2021-05-27)

* 优化canvas边距获取方式，方式在某些特殊情况下边距获取错误的问题
* 细化使用说明

#### 1.0.1 (2020-05-08)

* 增加输出图片类型参数 ```imageType```（```image/png``` &#124; ```image/jpeg``` &#124; ```image/webp```(Chrome支持)）
* 增加输出图片质量参数 ```imageType```为```image/jpeg```时生效
