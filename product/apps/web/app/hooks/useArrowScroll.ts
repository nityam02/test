import type { RefObject } from "react";
import { useRef, useCallback } from "react";

type HandleArrowClick = (dir: string) => () => void;
type UseArrowScroll = (
  scroll?: number
) => [RefObject<HTMLDivElement>, HandleArrowClick];

const useArrowScroll: UseArrowScroll = (scrollPix = 350) => {
  const listContainerRef = useRef<HTMLDivElement>(null);

  const handleArrowClick: HandleArrowClick = useCallback(
    (direction) => () => {
      const ele = listContainerRef.current;
      if (!ele) return;
      let scrollAmount = ele.scrollLeft;
      if (direction === "PREV") {
        scrollAmount -= scrollPix;
      } else {
        scrollAmount += scrollPix;
      }
      ele.scroll({
        left: scrollAmount,
        behavior: "smooth",
      });
    },
    [scrollPix]
  );

  return [listContainerRef, handleArrowClick];
};

export default useArrowScroll;
