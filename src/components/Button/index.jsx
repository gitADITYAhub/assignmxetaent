import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-md",
};
const variants = {
  fill: {
    blue_gray_900_02: "bg-blue_gray-900_02 text-gray-100_03",
    blue_100_19: "bg-blue-100_19 text-indigo-900_02",
    gray_100_01: "bg-gray-100_01 text-purple-A400",
    gray_50: "bg-gray-50 text-deep_purple-A200",
    orange_50: "bg-orange-50 text-orange-600",
    black_900: "bg-black-900 text-white-A700",
  },
};
const sizes = {
  md: "h-[38px] px-3.5 text-lg",
  lg: "h-[48px]",
  xs: "h-[21px] px-3.5 text-[10px]",
  sm: "h-[24px] px-1.5 text-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["md", "lg", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900_02", "blue_100_19", "gray_100_01", "gray_50", "orange_50", "black_900"]),
};

export { Button };
