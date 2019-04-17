
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

// 防抖
export function debounce(func: any, wait: number, immediate: boolean = false) {
  let timeout, result;
  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过,不再执行
      let callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) {
        result = func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result
  }
}
