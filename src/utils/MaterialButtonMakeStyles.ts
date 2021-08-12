import { DynamicSheet, DynamicSheetRule } from "@dynamicss/dynamicss";
import { hexColorToRGB, asureColor, colourNameToHex, darkerColor } from "@unlimited-react-components/kernel";
import { MaterialButtonProps } from "../MaterialButton/MaterialButtonProps";
/**
 * In order to avoid overwriting the classnames
 * and to be able to have different styled buttons in the document
 * it is necesary to add a numeric identifier next to the className: 
 *      instead of:  ".classname" 
 *      we get    :  ".classname-3", ".classname-4", ".classname-5" and so on
 * for this task a number is used as ID
 */
abstract class MaterialButtonStylizer {
    static nextButtonClassNameNumber = 0;
    /**
     * Increases the count and retrieves the next number
     * @returns the next static number in styles
     */
    static getNext(): number {
        MaterialButtonStylizer.nextButtonClassNameNumber++;
        return MaterialButtonStylizer.nextButtonClassNameNumber;
    }
}
/**
 * Calls the getNext() method of MaterialButtonStylizer class
 * @returns the next static number in styles
 */
export const getNextClassName = (): number => {
    return MaterialButtonStylizer.getNext();
}

/**
   * Creates the ripple effect
   * @param event
   */
export function createRipple<
    T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
>(event: React.MouseEvent<T, MouseEvent>, variant: string, color: string) {
    const buttonAnchorDiv = event.currentTarget;

    const circle: HTMLSpanElement = document.createElement("span");
    const diameter = Math.max(
        buttonAnchorDiv.clientWidth,
        buttonAnchorDiv.clientHeight
    );
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - buttonAnchorDiv.offsetLeft - radius
        }px`;
    circle.style.top = `${event.clientY - buttonAnchorDiv.offsetTop - radius
        }px`;
    circle.classList.add("ripple");

    if (variant !== "contained") {

        circle.style.backgroundColor = hexColorToRGB(
            asureColor(colourNameToHex(color)),
            0.4
        );

    } else {

        circle.style.backgroundColor = hexColorToRGB("#ffffff", 0.4);
    }
    const ripple = buttonAnchorDiv.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    buttonAnchorDiv.appendChild(circle);
}

export const makeDynamicStyle = (
    variant: MaterialButtonProps["variant"],
    disabled: MaterialButtonProps["disabled"],
    color: MaterialButtonProps["color"],
    textColor: MaterialButtonProps["textColor"],
    nextClassName: number
): DynamicSheet => {
    let styleSheet: DynamicSheet = {
        id: "material-button-styles" + "-" + nextClassName,
        sheetRules: [{
            className: `material-button.${variant}-${nextClassName}`,
            rules: {},
        },
        {
            className: `material-button-root.${variant}-${nextClassName}`,
            rules: {},
        },],
    };
    let sheetRules: DynamicSheetRule[] = styleSheet.sheetRules as DynamicSheetRule[];

    if (!disabled) {

        switch (variant) {
            case "contained":
                sheetRules[0].rules = {
                    color: asureColor(colourNameToHex(textColor)),
                    backgroundColor: asureColor(colourNameToHex(color)),
                };
                sheetRules[1].rules = {
                    ":hover": {
                        backgroundColor: darkerColor(
                            hexColorToRGB(asureColor(colourNameToHex(color)), 1)
                        ),
                    },
                };
                break;
            case "outlined":
                sheetRules[0].rules = {
                    border: `1px solid ${hexColorToRGB(
                        asureColor(colourNameToHex(color)),
                        0.5
                    )}`,
                    color: asureColor(colourNameToHex(color)),
                    backgroundColor: "transparent",
                };
                sheetRules[1].rules = {
                    ":hover": {
                        border: `1px solid ${hexColorToRGB(
                            asureColor(colourNameToHex(color)),
                            1
                        )}`,
                        backgroundColor: hexColorToRGB(
                            asureColor(colourNameToHex(color)),
                            0.085
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
                            0.085
                        ),
                    },
                };
                break;
        }
    }
    styleSheet.sheetRules = sheetRules;
    return styleSheet;
}