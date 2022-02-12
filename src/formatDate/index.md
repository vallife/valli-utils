---
title: formatDate - 时间格式化
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 7
---

## formatDate

> 开箱即用的时间格式化工具.

Demo:

```tsx | pure
import { formatDate } from '@vallife/utils-valli';

formatDate(new Date().getTime()); //2021-11-12 10:05:30

formatDate(new Date().getTime(), 'yyyy年MM月dd日'); //2021年11月12日

formatDate(new Date().getTime(), '今天是yyyy/MM/dd HH:mm:ss'); //今天是2021/11/12
```
