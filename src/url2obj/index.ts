/**
 * 获取并解码url中的参数值，并转为对象
 * @param {string} url
 */
export const url2obj = (
  url: string = window.location.href,
): { [key: string]: string } => {
  const obj: { [key: string]: string } = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  url.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
};

/**
 * 获取地址栏中的参数值
 * @param {string} key 参数键
 * @param {string} url  查询url
 * @returns
 */
export const urlParamBykey = (key: string, url: string): string => {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  let result = null;
  if (url) {
    result = url2obj(url)[key];
  } else {
    const r =
      window.location.href.substr(1).match(reg) ||
      window.location.hash.substr(1).match(reg);
    result = r ? r[2] : '';
  }
  return result;
};
