import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { ReactComponent as One } from "./Icons/Vector-One.svg";
import { ReactComponent as Two } from "./Icons/Vector-Two.svg";
import { ReactComponent as Three } from "./Icons/Vector-Three.svg";
import { ReactComponent as Four } from "./Icons/Vector-Four.svg";

const useStyles = makeStyles(() => ({
  "extra-small": {
    height: "0.72rem",
    width: "0.72rem"
  },
  small: {
    height: "1.25rem",
    width: "1.25rem"
  },
  "medium-small": {
    height: "2rem",
    width: "2rem"
  },
  medium: {
    height: "2.5rem",
    width: "2.5rem"
  },
  large: {
    height: "4.5rem",
    width: "4.5rem"
  },
  "large-medium": {
    height: "6rem",
    width: "6rem"
  },
  "extra-large": {
    height: "9rem",
    width: "9rem"
  },
  "extra-extra-large": {
    height: "14rem",
    width: "14rem"
  },
  "f-logo-class": {
    width: "20rem !important",
    height: "3.5rem !important"
  },
  "profile-label": {
    height: "28px",
    width: "62px"
  },
  badge: {
    height: "56px",
    width: "42px"
  },
  "netpoints-coin": {
    height: "25px",
    width: "25px",
    paddingTop: "3px"
  },
  "podium-svg-first": {
    height: "120px",
    width: "120px"
  },
  "podium-svg-second": {
    height: "110px",
    width: "110px"
  },
  "podium-svg-third": {
    height: "100px",
    width: "100px"
  },
  star: {
    height: "15px",
    width: "15px"
  }
}));

const getIcon = (type, className, externalProps) => {
  switch (type) {
    case "one":
      return <One className={className} {...externalProps} />;
    case "two":
      return <Two className={className} {...externalProps} />;
    case "three":
      return <Three className={className} {...externalProps} />;
    case "four":
      return <Four className={className} {...externalProps} />;
    default:
      return null;
  }
};

const MyIconsComponent = (props) => {
  const { type, size, className, externalProps } = props;
  const classes = useStyles();
  const icon = getIcon(
    type,
    clsx([classes[className] || "", classes[size]]),
    externalProps
  );
  return icon;
};

MyIconsComponent.propTypes = {
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-small",
    "medium-small",
    "large-medium",
    "product-size"
  ]),
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  externalProps: PropTypes.object
};

MyIconsComponent.defaultProps = {
  className: "",
  size: "small",
  externalProps: {}
};

export default MyIconsComponent;
