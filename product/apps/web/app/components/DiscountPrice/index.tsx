import React, { memo } from "react";
import "./styles.css";

interface Props {
  discountPercentage?: number;
  slashPrice?: string;
}

/**
 * @function DiscountPrice
 * @param {Props} props
 */

const DiscountPrice = (props: Props) => {
  const { slashPrice = "", discountPercentage = 0 } = props;
  const badge = `${discountPercentage}%`;
  const withBadge = discountPercentage > 0;

  return (
    <div className="container">
      {withBadge ? <div className="badge">{badge}</div> : null}
      <div className="price">{slashPrice}</div>
    </div>
  );
};

export default memo(DiscountPrice);
