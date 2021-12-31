---
title: uuid - 生成唯一id
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 1
---

## uuid

Demo:

```tsx | pure
import { uuit } from '@vallife/valli-util';

const id1 = uuid(8);

console.log(id1); // -> BUfS1qrn

const id2 = uuid(10);
console.log(id2); // -> Zd9hoanTYu

const id3 = uuid(16);
console.log(id3); // -> tXIEXMFXG77P4dN8
```

[更多技巧](https://zelark.github.io/nano-id-cc/)
