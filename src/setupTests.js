class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    this.callback([
      { contentRect: { width: target?.clientWidth || 800, height: target?.clientHeight || 600 } },
    ]);
  }
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;
