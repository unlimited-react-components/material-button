import React, { useRef, useState, useEffect } from "react";

import {
  createRipple,
  getNextClassName,
} from "../utils/MaterialButtonMakeStyles";
import {
  mergeProps,
  asureColor,
  hexColorToRGB,
  colourNameToHex,
  darkerColor,
} from "@unlimited-react-components/kernel";
import {
  MaterialButtonDefaultProps,
  MaterialButtonProps,
} from "./MaterialButtonProps";
import {
  DynamiCSS,
  DynamicSheet,
  DynamicSheetRule,
} from "@dynamicss/dynamicss";
import "./MaterialButton.scss";

const MaterialButton: React.FC<MaterialButtonProps> = (
  props: MaterialButtonProps,
) => {
  const {
    children,
    onClick,
    disabled,
    style,
    href,
    variant,
    color,
    textColor,
    className,
    text,
  } = mergeProps(props, MaterialButtonDefaultProps);
  //states
  const [idStyles, setIdStyles] = useState("");
  const [styleInjected, setStyleInjected] = useState(false);
  const [classNameCreated, setClassNameCreated] = useState("");

  //effects
  /**
   * Inserts the style for material button specific style
   * @param variant
   * @param disabled
   * @param color
   * @param textColor
   * @param class_name
   * @param text
   */
  const handleInserStyle = (
    variant: MaterialButtonProps["variant"],
    disabled: MaterialButtonProps["disabled"],
    color: MaterialButtonProps["color"],
    textColor: MaterialButtonProps["textColor"],
    class_name: MaterialButtonProps["className"],
    text: MaterialButtonProps["text"],
  ) => {
    //whether use the clasname number generator or not.
    //only use classname generator when there is no theme
   // const isThemeColor: boolean = color === "primary" || color === "secondary";
    let classname = `material-button-root material-button `;
    let styleSheet: DynamicSheet = {
      id: "material-button-styles",
      sheetRules: [],
    };
    let nextClassName: number = -1;
    let sheetRules: DynamicSheetRule[] = [];
    //if (!isThemeColor) {
      //unique ids, different buttons
      nextClassName = getNextClassName();
      styleSheet.id = styleSheet.id + "-" + nextClassName;
      sheetRules = [
        ...[
          {
            className: `material-button.${variant}-${nextClassName}`,
            rules: {},
          },
          {
            className: `material-button-root.${variant}-${nextClassName}`,
            rules: {},
          },
        ],
      ];
    //} 
    
   /*  else {
      // non unique ids
      styleSheet.id = "themed-" + styleSheet.id;
      sheetRules = [
        ...[
          { className: `material-button.${variant}`, rules: {} },
          {
            className: `material-button-root.${variant}`,
            rules: {},
          },
        ],
      ];
    } */

    if (!disabled) {
      //if (isThemeColor) {
      //  classname += `${variant}`;
     // } else {
        classname += `${variant} ${variant}-${nextClassName}`;
     // }

      switch (variant) {
        case "contained":
          sheetRules[0].rules = {
            color: asureColor(colourNameToHex(textColor)),
            backgroundColor: asureColor(colourNameToHex(color)),
          };
          sheetRules[1].rules = {
            ":hover": {
              backgroundColor: darkerColor(
                hexColorToRGB(asureColor(colourNameToHex(color)), 1),
              ),
            },
          };
          break;
        case "outlined":
          sheetRules[0].rules = {
            border: `1px solid ${hexColorToRGB(
              asureColor(colourNameToHex(color)),
              0.5,
            )}`,
            color: asureColor(colourNameToHex(color)),
            backgroundColor: "transparent",
          };
          sheetRules[1].rules = {
            ":hover": {
              border: `1px solid ${hexColorToRGB(
                asureColor(colourNameToHex(color)),
                1,
              )}`,
              backgroundColor: hexColorToRGB(
                asureColor(colourNameToHex(color)),
                0.085,
              ),
            },
          };
          break;
        case "text":
          sheetRules[0].rules = {
            color: asureColor(colourNameToHex(color)),
            backgroundColor: "transparent",
          };
          sheetRules[1].rules = {
            ":hover": {
              backgroundColor: hexColorToRGB(
                asureColor(colourNameToHex(color)),
                0.085,
              ),
            },
          };
          break;
        default:
          sheetRules[0].rules = {
            color: asureColor(colourNameToHex(textColor)),
            backgroundColor: asureColor(colourNameToHex(color)),
          };
          sheetRules[1].rules = {
            ":hover": {
              backgroundColor: darkerColor(
                hexColorToRGB(asureColor(colourNameToHex(color)), 1),
              ),
            },
          };
          break;
      }
    } else {
      classname += `disabled`;
    }
    //classname to override styles in stylesheet
    if (class_name) {
      classname += `${classname} ${class_name}`;
    }
    //some text in className
    if (text) {
      classname += ` ${text}`;
    }

    setClassNameCreated(classname);
    //Insert thestylesheet

    //sheetRules.className = classname;
    styleSheet.sheetRules = sheetRules;
    const id = DynamiCSS.insertStyleSheet(styleSheet);
    setIdStyles(id);
    if (id !== "") {
      setStyleInjected(true);
    }
  };
  const removeStyle = (idStyles: string) => {
    if (styleInjected) {
      DynamiCSS.removeStyleSheet(idStyles);
      setStyleInjected(false);
      setIdStyles("");
    }
  };
  useEffect(() => {
    //handleInserStyle(variant, disabled, color, textColor);
    return () => removeStyle(idStyles);
    // eslint-disable-next-line
  }, [idStyles]);

  useEffect(() => {
    removeStyle(idStyles);
    handleInserStyle(variant, disabled, color, textColor, className, text);
    // eslint-disable-next-line
  }, [variant, disabled, color, textColor, className, text]);
  //references
  const btn_ref = useRef<HTMLButtonElement>(null);
  const span_ref = useRef<HTMLSpanElement>(null);
  /**
   *
   * @param e event
   */
  function handleClick<T extends HTMLAnchorElement | HTMLButtonElement>(
    e: React.MouseEvent<T, MouseEvent>,
  ): void {
    createRipple(e, variant as string, color as string);
    if (onClick) onClick();
  }
  return (
    <>
      {styleInjected &&
        React.createElement(href ? "a" : "button", {
          className: classNameCreated,
          "data-testid": href ? "material-anchor" : "material-button",
          onClick: handleClick,
          ref: btn_ref,
          href: href,
          style: style,
          children: href ? (
            <span ref={span_ref} className="label">
              {children}
            </span>
          ) : (
            <span className="label">{children}</span>
          ),

          disabled: disabled,
        })}
    </>
  );
};

export default MaterialButton;
