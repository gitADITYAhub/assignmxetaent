import React from "react";

const sizes = {
  "3xl": "text-[26px] font-semibold leading-[39px]",
  "2xl": "text-2xl font-semibold leading-9",
  xl: "text-[22px] font-semibold leading-[33px]",
  "5xl": "text-4xl font-semibold leading-[140%]",
  "4xl": "text-[32px] font-semibold leading-[42px]",
  s: "text-base font-bold leading-[21px]",
  md: "text-lg font-bold leading-[22px]",
  "6xl": "text-[40px] font-semibold leading-[42px]",
  xs: "text-sm font-semibold leading-5",
  lg: "text-[19px] font-semibold leading-[29px]",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-900_04 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
