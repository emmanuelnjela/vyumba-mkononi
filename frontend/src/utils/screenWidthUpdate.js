export function screenWidthUpdate(ref, update) {
  const element = ref.current;

  function callback(entries) {
    const { width } = entries[0].contentRect;
    update(width);
  }
  const observer = new ResizeObserver(callback);
  observer.observe(element);
}
