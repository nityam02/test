export const checkArrowShow = (
  clientWidth: number,
  scrollWidth: number,
  scrollLeft: number
) => {
  const showArrow = { left: false, right: false };
  if (clientWidth + scrollLeft < scrollWidth) showArrow.right = true;
  if (scrollLeft > 0) showArrow.left = true;
  return showArrow;
};
