/**
 *
 * @description 函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
 * @param func 需要执行的函数
 * @param wait 延迟执行时间（毫秒）
 * @param immediate true 表立即执行，false 表非立即执行
 * @returns
 */
const debounce = function(
  this: any,
  func: any,
  wait: number,
  immediate: boolean,
) {
  let timer: any;
  return () => {
    let context = this;
    let args = [].slice.call(arguments); // 将具有length属性的对象转成数组
    if (timer) clearTimeout(timer);
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
};

export default debounce;
