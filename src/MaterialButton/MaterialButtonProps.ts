import { OverridableProps } from "@unlimited-react-components/kernel";

export interface MaterialButtonProps extends OverridableProps {
    /**
     * Function that specifies
     * what to do on click
     */
    onClick?: Function;
    /**
     * variants of button:
     * contained: with background color
     * outlined: border and transparent backgorund, on hover background color takes the color
     * text: no borders and no background color, on hover 
     */
    variant?: "text" | "outlined" | "contained";
    /**
     * whether the button will be disabled or not
     */
    disabled?: boolean;
    /**
     * whether this button redirect to somewhere
     */
    href?: string;
    /**
     * the text transfor for the button label
     */
    text?: "uppercase" | "capitalize" | "lowercase" | "none";
    /**
     * the main theme color
     */
    color?: string;// | ThemeColor;
}

//export type ThemeColor = "primary" | "secondary";
/**
 * default props for material button
 */
export const MaterialButtonDefaultProps: MaterialButtonProps = {
    children: undefined,
    style: {},
    onClick: () => { },
    variant: "contained",
    disabled: false,
    color: "#071e25",
    textColor: "#FFFFFF",
    text: "uppercase"
}