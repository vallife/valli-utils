---
title: url2obj - 解码、获取url中参数并转为对象
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 3
---

## url2obj

> 将对象转换成编码后的 url 字符串

Demo:

```tsx | pure
import { url2obj } from '@vallife/valli-util';

url2obj('?name=valli-util&desc=util'); // {name: 'valli-util', desc: 'util'}
```

> 根据参数键，获取地址栏中的参数值

Demo:

```tsx | pure
import { keyParam } from '@vallife/valli-util';
keyParam(
  'q',
  'https://www.bing.com/search?q=npm+%E5%8F%91%E5%B8%83%E6%8C%87%E5%AE%9A%E6%96%87%E4%BB%B6%E5%A4%B9&PC=U316&FORM=CHROMN',
); // npm+发布指定文件夹
```
