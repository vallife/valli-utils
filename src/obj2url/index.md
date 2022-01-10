---
title: obj2url - 将对象参数解析为url字符串
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 2
---

## obj2url

> 将对象转换成编码后的 url 字符串

Demo:

```tsx | pure
import { obj2url } from '@vallife/utils-valli';

obj2url({ a: 123, b: 'valli-util' }); // a=123&b=valli-util
```
