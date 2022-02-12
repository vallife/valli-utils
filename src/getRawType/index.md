---
title: getRawType - 获取数据类型
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 8
---

## getRawType

> 获取数据类型，返回结果为 Number、String、Object、Array 等.

Demo:

```tsx | pure
import { getRawType } from '@vallife/utils-valli';

const name = getRawType('vallife');
console.log(name); // String

const obj = getRawType({});
console.log(obj); // Object
```
