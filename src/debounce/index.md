---
title: debounce - 函数防抖
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 6
---

## debounce

> 函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本

函数防抖其实是分为 “立即执行版” 和 “非立即执行版” 的，根据字面意思就可以发现他们的差别，所谓立即执行版就是 触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内
触发了事件，则会重新计算函数执行时间。 而 “非立即执行版” 指的是 触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。

在开发过程中，我们需要根据不同的场景来决定我们需要使用哪一个版本的防抖函数，一般来讲上述的防抖函数都能满足大部分的场景需求。但我们也可以将非立即执行版和立即执行版的防抖函数结合起来

Demo:

```tsx | pure
import { debounce } from '@vallife/utils-valli';

function handle() {
  console.log(Math.random());
}
// window.addEventListener("mousemove",debounce(handle,1000,true)); // 调用立即执行版本
window.addEventListener('mousemove', debounce(handle, 1000, false)); // 调用非立即执行版本
```
