# Awesome Zhuiju Free

> 追剧不踩坑，资源有人测。

Awesome Zhuiju Free 是一个持续验证、公开透明的追剧资源指南。我们收集在线影视、字幕、播放器、公开订阅源、资源搜索和会员优惠等信息，并记录访问体验、风险等级与最后验证时间，帮助用户减少试错。

[访问 zhuiju.me](https://zhuiju.me) · [推荐资源](https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=resource.yml) · [报告失效](https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=broken-link.yml) · [权利人联系](https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=rights-holder-request.yml)

## 项目原则

- **持续验证**：资源不是收录后就结束，每条记录都展示最后验证日期。
- **公开透明**：评分、风险、状态变化和投诉处理都有记录。
- **如实描述**：不因合作、广告或个人偏好修改评分。
- **只做指引**：项目不托管影视文件、破解软件、账号、密钥或单部影视作品链接。
- **及时处理**：收到有效的权利通知、安全报告或失效反馈后及时复核。

## 精选资源

> 以下内容来自 [`resources/resources.json`](resources/resources.json)，当前仅作为首版数据与展示 Demo。评分为初始人工评估，等待更多验证。

| 资源 | 分类 | 多 | 快 | 净 | 稳 | 易 | 风险 | 最后验证 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [CCTV 节目官网](https://tv.cctv.com/) | 在线影视 | 3.5 | 4.5 | 4.0 | 4.8 | 4.2 | 低 | 2026-06-06 |
| [1905 电影网](https://www.1905.com/vod/) | 在线影视 | 3.8 | 4.2 | 3.5 | 4.5 | 4.0 | 低 | 2026-06-06 |
| [Internet Archive Movies](https://archive.org/details/movies) | 在线影视 | 4.2 | 3.0 | 4.8 | 4.6 | 3.5 | 中 | 2026-06-06 |
| [OpenSubtitles](https://www.opensubtitles.com/zh-CN) | 字幕 | 4.8 | 3.2 | 2.8 | 4.5 | 3.5 | 中 | 2026-06-06 |
| [Kodi](https://kodi.tv/) | 播放器 | 4.5 | 4.0 | 5.0 | 4.8 | 3.8 | 低 | 2026-06-06 |
| [IPTV-org](https://github.com/iptv-org/iptv) | 订阅源 | 4.5 | 3.5 | 5.0 | 4.0 | 3.0 | 中 | 2026-06-06 |
| [Academic Torrents](https://academictorrents.com/) | 磁力搜索 | 2.8 | 3.5 | 4.8 | 4.2 | 3.2 | 低 | 2026-06-06 |

## 怎么看评分

能力评分使用 1.0 至 5.0 分，风险单独展示，不计算总分。

| 维度 | 含义 |
| --- | --- |
| **多** | 资源数量、类型覆盖与更新情况 |
| **快** | 页面打开、搜索响应与播放加载速度 |
| **净** | 广告、弹窗、跳转和诱导下载情况，越高越干净 |
| **稳** | 可访问率、域名稳定性与维护频率 |
| **易** | 搜索体验、移动端体验与使用门槛 |

风险分为版权、安全、隐私和支付四类，并使用 `低 / 中 / 高 / 未知` 标记。详细规则见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 资源状态

```text
待验证 → 已验证 → 推荐 / 谨慎使用 → 暂时失效 → 已下架
```

- **推荐**：已验证，整体体验较好，风险透明。
- **谨慎使用**：可用，但存在明显广告、安全、隐私、版权或支付风险。
- **暂时失效**：当前无法访问，保留记录等待复查。
- **已下架**：因长期失效、权利通知、恶意行为或其他明确原因停止推荐。

## 仓库结构

```text
.
├── README.md                       # 精选榜单和项目介绍
├── CONTRIBUTING.md                 # 提交、评分、验证与下架规则
├── scripts/
│   └── validate-data.mjs            # 零依赖数据校验
├── resources/
│   ├── README.md                   # 数据字段说明
│   ├── resources.json              # 全部资源主数据
│   └── schema.json                 # 资源数据 JSON Schema
└── reports/
    ├── README.md                   # 记录维护说明
    ├── verifications.json          # 验证历史
    └── notices.json                # 投诉与处理记录
```

每次提交修改后，GitHub Actions 会自动运行数据校验，避免重复 ID、错误评分、无效日期和验证记录引用不存在的资源。

## 参与维护

发现好用资源、链接失效或评分不准确，都欢迎提交 Issue 或 Pull Request：

- [推荐新资源](https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=resource.yml)
- [报告失效或风险](https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=broken-link.yml)
- [提交权利人请求](https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=rights-holder-request.yml)
- 阅读完整的 [贡献指南](CONTRIBUTING.md)

## 免责声明

本项目仅提供资源索引、体验记录与风险提示，不托管、不上传、不复制、不销售第三方影视内容，也不对第三方网站的合法性、可用性或安全性作保证。访问第三方网站前，请遵守所在地法律、内容许可和服务条款，并自行判断风险。

如果你是权利人，认为某条收录不当，请通过权利人请求模板联系。项目会公开记录请求与处理结果，但不会公开不必要的个人信息。
