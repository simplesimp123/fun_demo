# Dating Cost Atlas

全球学生约会开销可视化网站。项目用一个静态前端页面，把 100 个代表性城市的学生约会成本、月预算压力、打工小时、男女分摊压力和约会账单拆解做成可交互的数据仪表盘。

> 这是一个演示型数据可视化项目。页面中的城市成本数据为模型估算和公开数据源口径校准后的样例数据，适合做交互展示、产品原型和方法讨论，不应直接作为消费、留学或财务决策依据。

## 在线/本地运行

这个项目没有构建步骤，也不依赖前端框架。

直接打开：

```text
index.html
```

或在项目目录启动一个本地静态服务：

```bash
python -m http.server 4173 --bind 127.0.0.1
```

然后访问：

```text
http://127.0.0.1:4173/index.html
```

## 核心功能

- 全球 100 城学生约会压力地图
- 城市搜索和地区筛选
- 5 种约会类型：校园低成本、咖啡甜品、普通晚餐、电影晚餐、精致夜晚
- 4 种付款模式：AA、男生全付、女生全付、按收入比例分摊
- 学生月生活预算和每月约会次数滑块
- 一次约会账单拆解
- 学生负担榜、金额榜、性别压力差榜
- 成本与预算占比散点图
- 城市对比表
- 数据来源和方法说明

## 数据模型

页面以“学生视角”衡量一次约会的压力，而不是只比较城市物价。

主要指标：

- `Date Cost`：一次约会成本，按当前约会类型汇总餐饮、饮品、交通、电影/活动、打扮等项目。
- `Student Burden`：一次约会成本占学生月生活预算的比例。
- `Work Hours Needed`：一次约会成本折算为本地学生打工小时。
- `Gender Burden Gap`：不同付款模式下，男女可用现金压力的差异。
- `Monthly Dating Bill`：按每月约会次数估算的月度约会账单。

当前数据为内置静态数据集，位于 [`app.js`](app.js)。生产版本可以把这些数据替换为 API 或后端数据服务。

## 数据来源参考

项目方法说明参考了以下公开数据源和报告口径：

- [Numbeo Cost of Living](https://www.numbeo.com/cost-of-living/)：城市餐饮、交通、娱乐等生活成本参考。
- [World Bank PPP](https://data.worldbank.org/indicator/PA.NUS.PPP)：跨国购买力和价格水平校准。
- [ILOSTAT](https://ilostat.ilo.org/data/)：工资、青年就业和性别收入差参考。
- [UNESCO UIS](https://data.unesco.org/explore/dataset/uis001/api/)：高等教育和学生规模背景。
- [BMO 2026 Date-flation](https://usnewsroom.bmo.com/2026-02-11-Date-flation-Hits-Hard-Average-Date-Spend-Nears-200-BMO-Real-Financial-Progress-Index)：美国约会通胀参考锚点。

## 项目结构

```text
.
├── index.html   # 页面结构和内容
├── styles.css   # 响应式布局、视觉系统和组件样式
├── app.js       # 城市数据、计算模型、地图绘制和交互逻辑
└── README.md    # 项目说明
```

## 设计方向

界面采用“数据编辑部 + 学生金融工具”的风格：高密度信息、浅色背景、地图作为主视觉，使用珊瑚色提示成本压力、青绿色提示可负担度、蓝色/紫色区分地区和交互状态。

## 后续可以扩展

- 接入真实 API，定期刷新城市物价和 PPP 数据。
- 增加城市详情页和单城市分享海报。
- 增加移动端专属的竖屏排行榜和摘要卡片。
- 加入 GitHub Pages 自动部署。
- 增加数据版本号和数据更新时间。
