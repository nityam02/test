import { useEffect, useRef, MutableRefObject } from "react";
import MyIntersectionObserver, {
  Options,
} from "../classes/MyIntersectionObserver";

type HandleIntersect = (
  entry: IntersectionObserverEntry,
  io: IntersectionObserver
) => void;

function useIntersect<T>(
  handleIntersect: HandleIntersect,
  options: Options,
  onbserveOnce = true
): MutableRefObject<T> {
  const targetRef = useRef(null);
  useEffect(() => {
    const IO = new MyIntersectionObserver((entries, intersectionObs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleIntersect(entry, intersectionObs);
          if (onbserveOnce) {
            IO.unobserve(entry.target);
          }
        }
      });
    }, options);
    IO.observe<HTMLImageElement>(targetRef.current);
  }, []);

  return targetRef;
}

export default useIntersect;
