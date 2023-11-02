import React from "react";

const sizeClasses = {
  txtAlteHaasGrotesk300: "font-altehaasgrotesk font-normal",
  txtAlteHaasGroteskBold300: "font-altehaasgrotesk font-bold",
  txtSourceSansProBold20WhiteA700: "font-bold font-sourcesanspro",
  txtAlteHaasGroteskBold90: "font-altehaasgrotesk font-bold",
  txtAlteHaasGrotesk25: "font-altehaasgrotesk font-normal",
  txtAlteHaasGroteskBold30: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold20: "font-altehaasgrotesk font-bold",
  txtAlteHaasGrotesk20: "font-altehaasgrotesk font-normal",
  txtAlteHaasGrotesk30: "font-altehaasgrotesk font-normal",
  txtAlteHaasGroteskBold25: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold200: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold320: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold100: "font-altehaasgrotesk font-bold",
  txtSourceSansProBold16: "font-bold font-sourcesanspro",
  txtSourceSansProBold15: "font-bold font-sourcesanspro",
  txtAlteHaasGroteskBold90Red400: "font-altehaasgrotesk font-bold",
  txtSourceSansProRegular20: "font-normal font-sourcesanspro",
  txt3Of9Barcode70: "font-normal font-ofbarcode",
  txtSourceSansProSemiBold18: "font-semibold font-sourcesanspro",
  txtAlteHaasGroteskBold30Red400: "font-altehaasgrotesk font-bold",
  txtSourceSansProSemiBold17: "font-semibold font-sourcesanspro",
  txtSourceSansProBold20: "font-bold font-sourcesanspro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
