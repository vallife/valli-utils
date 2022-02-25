---
title: eventBus - 事件总线
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 9
---

## eventBus

> 事件总线

### API 说明

- eventBus: 包含所有功能的事件总线对象
- eventBus.on(eventName, listener): 绑定事件监听
- eventBus.emit(eventName, data): 分发事件
- eventBus.off(eventName): 解绑指定事件名的事件监听, 如果没有指定解绑所有

### Demo:

```tsx | pure
import { eventBus } from '@vallife/utils-valli';

eventBus.on('add', data => {
  console.log('add', data); // add 123
});

eventBus.on('add', data => {
  console.log('add2', data); // add2 123
});

eventBus.on('delete', data => {
  console.log('delete', data);
});

eventBus.emit('add', 123);
```
