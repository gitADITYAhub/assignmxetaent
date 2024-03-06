import React from "react";

const sizes = {
  "5xl": "text-xl font-normal leading-[31px]",
  xs: "text-[10px] font-normal",
  lg: "text-sm font-normal leading-[21px]",
  "6xl": "text-5xl font-normal leading-[48px]",
  s: "text-[11px] font-normal",
  "2xl": "text-base font-normal leading-[25px]",
  "3xl": "text-[17px] font-normal leading-6",
  "4xl": "text-lg font-normal",
  xl: "text-[15px] font-normal leading-[22px]",
  md: "text-xs font-normal leading-[18px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
