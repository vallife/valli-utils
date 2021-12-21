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
import { uuit } from 'valli-util';
import { uuid } from 'xijs';

const id1 = uuid(8);

console.log(id1); // -> RvuUN6RS

const id2 = uuid(10);
console.log(id2); // -> kvKnvYC2Jb

const id3 = uuid(16);
console.log(id3); // -> su7itMfdk6f8ZcGi
```

[更多技巧](https://zelark.github.io/nano-id-cc/)
