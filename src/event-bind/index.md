---
title: eventBind - 事件绑定
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 10
---

## eventBind

> 事件绑定

### API 说明

- eventBind: 事件绑定函数对象
- el: 绑定对象
- type: 绑定对象触发事件类型
- selector: 绑定对象到子元素，可选，若为空，直接绑定到 el 对象上

### Demo:

```tsx | pure
<ul id="items">
  <li>AAAA</li>
  <li>BBBB</li>
  <li>CCCC</li>
  <li>DDDD</li>
  <div>EEEE</div>
</ul>;

import { eventBind } from '@vallife/utils-valli';

eventBind(
  '#items',
  'click',
  function(e) {
    //输出标签文本
    console.log(this.innerHTML);
  },
  'li',
);
```
