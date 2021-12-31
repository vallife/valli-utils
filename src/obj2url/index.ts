/**
 * 对象转为url参数
 * @param {object} data
 * @param {boolean} isPrefix
 */
const obj2url = (data: any, isPrefix?: boolean) => {
  let prefix = isPrefix ? '?' : '';
  let result = [];
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      // 去除空参
      if (['', undefined, null].includes(value)) {
        continue;
      }
      if (value.constructor === Array) {
        value.forEach((item: any) => {
          result.push(
            `${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`,
          );
        });
      } else {
        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  }
  return result.length ? prefix + result.join('&') : '';
};

export default obj2url;
