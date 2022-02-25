---
title: pubSub - 消息订阅与发布
nav:
  title: 使用文档
  path: /libs
group:
  path: /
  order: 11
---

## pubSub

> 消息订阅与发布

### API 说明

- pubSub: 包含所有功能的订阅/发布消息的管理者
- pubSub.subscribe(msg, subscriber): 订阅消息: 指定消息名和订阅者回调函数
- pubSub.publish(msg, data): 异步发布消息: 指定消息名和数据
- pubSub.publishSync(msg, data): 同步发布消息: 指定消息名和数据
- pubSub.unsubscribe(flag): 取消订阅: 根据标识取消某个或某些消息的订阅

### Demo:

```tsx | pure
import { pubSub } from '@vallife/utils-valli';

//订阅一个频道
let pid = pubSub.subscribe('pay', data => {
  console.log('商家接到了订单, 准备开始制作', data);
});

let pid2 = pubSub.subscribe('pay', data => {
  console.log('骑手接到了订单, 准备开始去取餐', data);
});

pubSub.subscribe('cancel', data => {
  console.log('商家接到了取消的请求');
});

//发布消息
pubSub.publish('pay', {
  title: '鱼香肉丝盖饭',
  price: 20,
  pos: '三年二班',
});

//取消订阅
pubSub.unsubscribe('pay');
pubSub.unsubscribe('token_2');
```
