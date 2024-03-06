import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-sm text-gray-600_01",
    gray_50_02: "bg-gray-50_02",
    green_50_33: "bg-green-50_33 text-blue_gray-300_02",
    deep_orange_A100_19: "bg-deep_orange-A100_19 text-blue_gray-300_02",
  },
};
const sizes = {
  sm: "h-[55px] px-[21px] text-sm",
  md: "h-[60px] pl-6 pr-[35px] text-lg",
  xs: "h-[39px] px-2.5 text-xs",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "deep_orange_A100_19",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "md", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_50_02", "green_50_33", "deep_orange_A100_19"]),
};

export { Input };
