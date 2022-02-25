const pubSub = {
  // 订阅唯一 id
  id: 1,
  // 频道和回调保存容器
  callbacks: {},

  /**
   * 订阅频道
   */
  subscribe(this: any, channel: string, callback: () => void) {
    // 创建唯一编号
    let token = `valli_token_${this.id++}`;
    // 判断 callbacks 中是否存在 channel
    if (this.callbacks[channel]) {
      this.callbacks[channel] = callback;
    } else {
      this.callbacks[channel] = {
        [token]: callback,
      };
    }
    return token;
  },

  /**
   * @description 发布消息
   * @param this
   * @param channel
   * @param data
   */
  publish(this: any, channel: string, data: any) {
    // 获取当前频道中所有回调
    if (this.callbacks[channel]) {
      Object.values<Function>(this.callbacks[channel]).forEach(
        (callback): void => {
          // 执行回调
          callback(data);
        },
      );
    }
  },

  /**
   * @description 取消订阅
   * @param this
   * @param flag 可选，为空，清空所有；不为空，可以有 token 或者 msgName
   */
  unsubscribe(this: any, flag: any) {
    // 如果flag为undefined，则清空所有订阅
    if (flag === undefined) {
      this.callbacks = {};
    } else if (typeof flag === 'string') {
      // 判断是否为 valli_token_ 开头
      if (flag.indexOf('valli_token_') === 0) {
        // 如果是，表明是一个订阅id
        let callbackObj: Object | undefined = Object.values<Object>(
          this.callbacks,
        ).find((obj): void => {
          obj.hasOwnProperty(flag);
        });
        if (callbackObj) {
          delete callbackObj[flag];
        }
      } else {
        delete this.callbacks[flag];
      }
    }
  },
};

export default pubSub;
