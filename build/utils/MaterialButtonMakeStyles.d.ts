/// <reference types="react" />
import { DynamicSheet } from "@dynamicss/dynamicss";
import { MaterialButtonProps } from "../MaterialButton/MaterialButtonProps";
/**
 * Calls the getNext() method of MaterialButtonStylizer class
 * @returns the next static number in styles
 */
export declare const getNextClassName: () => number;
/**
   * Creates the ripple effect
   * @param event
   */
export declare function createRipple<T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>(event: React.MouseEvent<T, MouseEvent>, variant: string, color: string): void;
export declare const makeDynamicStyle: (variant: MaterialButtonProps["variant"], disabled: MaterialButtonProps["disabled"], color: MaterialButtonProps["color"], textColor: MaterialButtonProps["textColor"], nextClassName: number) => DynamicSheet;
