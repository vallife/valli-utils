/**
 *  时间格式化
 */
function formatDate(time: number, format: string = 'yyyy-MM-dd HH:mm:ss') {
  const date = new Date(time);

  const year = date.getFullYear(),
    month = date.getMonth() + 1, // 月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  const preArr = Array.apply(null, Array(10)).map(function(elem, index) {
    return `0${index}`;
  });

  const newTime = format
    .replace(/yyyy/g, String(year))
    .replace(/MM/g, String(preArr[month] || month))
    .replace(/dd/g, String(preArr[day] || day))
    .replace(/HH/g, String(preArr[hour] || hour))
    .replace(/mm/g, String(preArr[min] || min))
    .replace(/ss/g, String(preArr[sec] || sec));

  return newTime;
}

export default formatDate;
