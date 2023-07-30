export interface Options {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number | number[];
}

export type Callback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

let IOInstance = null;

class MyIntersectionObserver {
  get instance() {
    return IOInstance;
  }

  constructor(callback: Callback, options: Options) {
    this.initialiseInstance(callback, options);
  }

  destroyInstance() {
    if (!IOInstance) return;
    this.instance.disconnect();
    IOInstance = null;
  }

  initialiseInstance(callback: Callback, options: Options) {
    if (!this.instance)
      IOInstance = new IntersectionObserver(callback, options);
    return this.instance;
  }

  observe<T extends Element>(target: T) {
    if (target) this.instance.observe(target);
  }

  unobserve<T extends Element>(target: T) {
    this.instance.unobserve(target);
  }
}

export default MyIntersectionObserver;
