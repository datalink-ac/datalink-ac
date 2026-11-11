# mneme — datalink.ac 的记忆

这个目录是 datalink-ac 项目的**记忆中枢**：开发期间的思考、决策记录、以及还没想清楚的东西，
都放在这里；对外的东西（站点、博客、规范）放在仓库其它地方。

站点和公开规范是给读者看的；这里是给「下一次开工的人」看的。

## 结构

```
mneme/
├── inbox/                 # 原始捕获：外部材料、issue 原文
├── raw/                   # 原始素材（repos/ 是抓下来的仓库）
├── wiki/                  # 工作笔记：结论、决策、开放问题
├── blog/                  # 已发布：对外发出去的稿子在这里留档
└── .ondb/                 # 实体与关系图（schema.tsv / ondb.tsv）
```

约定：

- **wiki/** 放「结论 + 上下文」。写清楚**定了什么**和**什么还没定**。
- **inbox/** 放原始材料，别改。wiki 引用它。
- **blog/** 只放**已经发布出去**的稿子，用来记录「发布时是什么样子」，
  源文件在 `content/blog/`。
- **.ondb/ondb.tsv** 是索引：`_Source` / `_WikiPage` / `_BlogPost` 三种实体，
  行格式 `add<TAB>type<TAB>id<TAB>ms<TAB>name<TAB>…<TAB>key<TAB>value`。

## 现在有什么

| 文件 | 是什么 |
|---|---|
| `wiki/20261112-datalink-issue.md` | issue #1 的出处记录：讲法、三条主张、第一个场景、留下的开放问题 |
| `wiki/20261112-datalink-privacy.md` | 隐私思考：已经定的（公开、短链接不是隐私工具、那条规矩）与还没定的三个问题 |
| `blog/20261112-what-a-url-reveals.md` | 已发布的《URL 会暴露什么》留档 |
| `inbox/20261112-issue-datalink-as-context.md` | issue 原文 |

## 还没解决的（记在 wiki 里，别丢）

- 数据链接要不要带「敏感度」标记？
- 公开链接能不能被撤销？——和纯函数性（I3）有张力，方案还没成型。
- URL 装不下的数据怎么办？存起来就等于把私有链接变成一个数据库。
- 规格要不要签名？agent 怎么分得出真图和伪造图？

## 工具

`x mneme` 模块还没装上（`x-bash/mneme` 缺 `adv/index.yml`，构建不出 advise.jso）。
目录结构按 `x mneme init` 的实际实现手工建的，`.ondb/` 的行格式也按 `x ondb add` 的
格式写好了——模块一装上就能直接用：

```sh
x mneme recall "privacy"      # 搜 ondb + wiki
x mneme note --name <名字>     # 新建一条 wiki 笔记
```
