/**
 * Throttles callbacks by specified delay
 * @param callback function to be called
 * @param delay time in milli-seconds to delay before calling next time
 * @see [source](https://programmingwithmosh.com/javascript/javascript-throttle-and-debounce-patterns/)
 */
export function throttle<A extends any[]>(callback: (...args: A) => void, delay = 100) {
  let enableCall = true;

  return function <T>(this: T, ...args: A) {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => (enableCall = true), delay);
  };
}

/**
 * Waits to call a callback for specified delay, if callback is called
 * multiple times then only lastest call is used rest are ignored
 * @param callback function to be called
 * @param delay time in milli-seconds to wait before calling
 * @see [source](https://programmingwithmosh.com/javascript/javascript-throttle-and-debounce-patterns/)
 */
export function debounce<A extends any[]>(callback: (...args: A) => void, delay = 100) {
  let debounceTimeoutId: NodeJS.Timeout;

  return function <T>(this: T, ...args: A) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => callback.apply(this, args), delay);
  };
}
