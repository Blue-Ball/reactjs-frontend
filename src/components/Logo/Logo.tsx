import React, { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";
import { createStyles, Theme, WithStyles, withStyles } from "@e-group/material";
import logo from "./logo.png";
import logoGray from "./logo-gray.png";
import logoWhite from "./logo-white.png";

const logoVariant = {
  default: logo,
  gray: logoGray,
  white: logoWhite,
};

export interface LogoProps extends HTMLAttributes<HTMLImageElement> {
  size?: "default" | "large" | "small";
  color?: "default" | "gray" | "white";
  backgroundColor?: "black" | "gray" | "white";
  variant?: "default" | "rounded";
  disableElevation?: boolean;
  imgClassName?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxShadow: (props: LogoProps) =>
        props.disableElevation ? undefined : theme.shadows[1],
    },
    img: {
      width: 44,
      height: 44,
    },
    small: {
      width: 33,
      height: 33,
    },
    large: {
      width: 55,
      height: 55,
    },
    rounded: {
      borderRadius: "50%",
      padding: 12,
    },
    roundedBackgroundWhite: {
      backgroundColor: theme.palette.common.white,
    },
    roundedBackgroundBlack: {
      backgroundColor: theme.palette.common.black,
    },
    roundedBackgroundGray: {
      backgroundColor: "#333333",
    },
    roundedSmall: {
      padding: 8,
    },
    roundedLarge: {
      padding: 16,
    },
  });

const Logo = forwardRef<
  HTMLImageElement,
  LogoProps & WithStyles<typeof styles>
>((props, ref) => {
  const {
    classes,
    className,
    imgClassName,
    color = "default",
    variant = "default",
    size,
    backgroundColor = "white",
    disableElevation,
    ...other
  } = props;
  const src = logoVariant[color];
  const isRounded = variant === "rounded";
  return (
    <div
      className={clsx(className, classes.root, {
        [classes.rounded]: isRounded,
        [classes.roundedBackgroundWhite]:
          isRounded && backgroundColor === "white",
        [classes.roundedBackgroundBlack]:
          isRounded && backgroundColor === "black",
        [classes.roundedBackgroundGray]:
          isRounded && backgroundColor === "gray",
        [classes.roundedSmall]: isRounded && size === "small",
        [classes.roundedLarge]: isRounded && size === "large",
      })}
    >
      <img
        src={src}
        ref={ref}
        alt="logo"
        className={clsx(imgClassName, classes.img, {
          [classes.small]: size === "small",
          [classes.large]: size === "large",
        })}
        {...other}
      />
    </div>
  );
});

export default withStyles(styles)(Logo);
