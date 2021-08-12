import React, { useRef, useState, useEffect } from "react";
import "./MaterialButton.scss";
import {
  createRipple,
  getNextClassName,
  makeDynamicStyle,
} from "../utils/MaterialButtonMakeStyles";
import {
  MaterialButtonDefaultProps,
  MaterialButtonProps,
} from "./MaterialButtonProps";
import { mergeProps } from "@unlimited-react-components/kernel";
import {
  DynamiCSS,
  DynamicSheet,
  DynamicSheetRule,
} from "@dynamicss/dynamicss";

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
  const [idStyles, setIdStyles] = useState<string>("");
  const [styleInjected, setStyleInjected] = useState<boolean>(false);
  const [nextClassName, setNextClassName] = useState<number>(0);
  const [classNameCreated, setClassNameCreated] = useState<string>("");

  //effects
  useEffect(() => {
    return () => removeStyle();
  }, [idStyles]);

  /**
   * Inserts the style for material button specific style
   * @param variant
   * @param disabled
   * @param color
   * @param textColor
   * @param text
   */
  const handleInserStyle = async (
    variant: MaterialButtonProps["variant"],
    disabled: MaterialButtonProps["disabled"],
    color: MaterialButtonProps["color"],
    textColor: MaterialButtonProps["textColor"],

    text: MaterialButtonProps["text"],
  ) => {
    let class_name: string = className || "";

    let styleSheet: DynamicSheet;
    let idStyle: string = "";
    let nextClassNameVar: number;
    if (nextClassName == 0 && !styleInjected) {
      //new
      nextClassNameVar = getNextClassName();
      styleSheet = makeDynamicStyle(
        variant,
        disabled,
        color,
        textColor,
        nextClassNameVar,
      );
      setNextClassName(nextClassNameVar);
      idStyle = DynamiCSS.insertStyleSheet(styleSheet);

      makeClassName(variant, class_name, nextClassNameVar);
      setIdStyles(idStyle);
      if (idStyle !== "") {
        setStyleInjected(true);
      }
    } else {
      //already a stylesheet associated
      styleSheet = makeDynamicStyle(
        variant,
        disabled,
        color,
        textColor,
        nextClassName,
      );
      idStyle = DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
      makeClassName(variant, class_name, nextClassName);
    }

    //className
  };
  /**
   *
   * @param variant
   * @param class_name
   */
  const makeClassName = (
    variant: MaterialButtonProps["variant"],
    class_name: string,
    nextClassNameVar: number,
  ) => {
    let classname = `material-button-root material-button `;
    if (!disabled) {
      classname += `${variant} ${variant}-${nextClassNameVar}`;
    } else {
      classname += `disabled`;
    }
    //classname to override styles in stylesheet
    if (class_name) {
      classname += ` ${classname} ${class_name}`;
    }
    //some text in className
    if (text) {
      classname += ` ${text}`;
    }

    setClassNameCreated(classname);
  };
  const removeStyle = () => {
    if (styleInjected) {
      DynamiCSS.removeStyleSheet(idStyles);
      setStyleInjected(false);
      setIdStyles("");
    }
  };

  useEffect(() => {
    handleInserStyle(variant, disabled, color, textColor, text);
  }, [variant, disabled, color, textColor, text]);

  //references
  const btn_ref = useRef<HTMLButtonElement>(null);
  const span_ref = useRef<HTMLSpanElement>(null);
  /**
   *
   * @param e
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
