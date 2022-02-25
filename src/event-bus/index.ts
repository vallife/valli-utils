class EventBus {
  private callbacks: object;
  constructor() {
    this.callbacks = {};
  }

  /**
   * @description 绑定事件
   * @param this
   * @param type 事件类型
   * @param callback 回调函数
   */
  on = function(this: any, type: string, callback: Function) {
    // 判断 callbacks 属性中是否存在该类型事件
    if (this.callbacks[type]) {
      // 如果存在该类型事件
      this.callbacks[type].push(callback);
    } else {
      // 如果不存在
      this.callbacks[type] = [callback];
    }
  };

  emit = function(this: any, type: string, data: any) {
    // 判断 callbacks 属性中是否存在该类型事件
    if (this.callbacks[type] && this.callbacks[type].length > 0) {
      // 如果存在该类型事件
      this.callbacks[type].forEach((cb: (arg0: any) => void) => {
        cb(data);
      });
    }
  };
  off = function(this: any, eventName: string) {
    if (eventName) {
      delete this.callbacks[eventName];
    } else {
      this.callbacks = {};
    }
  };
}

const eventBus = new EventBus();

export default eventBus;
