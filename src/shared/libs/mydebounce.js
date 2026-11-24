export function mydebounce(func, ms) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}
