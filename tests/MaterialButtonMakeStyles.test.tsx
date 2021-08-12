import "@testing-library/jest-dom";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { makeDynamicStyle } from "../src/utils/MaterialButtonMakeStyles";
import { DynamicSheet, DynamicSheetRule } from "@dynamicss/dynamicss";
import {
  asureColor,
  colourNameToHex,
  darkerColor,
  hexColorToRGB,
} from "@unlimited-react-components/kernel";
test("Validate makeDynamicStyle for Material Button", () => {
  const variant = "contained";
  const nextClassName: number = 1;
  const disabled: boolean = false;
  const color: string = "rgb(45,25,10)";
  const textColor: string = "white";

  const result = makeDynamicStyle(variant, disabled, color, textColor, 1);
  let expected: DynamicSheet = {
    id: "material-button-styles" + "-" + nextClassName,
    sheetRules: [
      {
        className: `material-button.${variant}-${nextClassName}`,
        rules: {
            color: asureColor(colourNameToHex(textColor)),
            backgroundColor: asureColor(colourNameToHex(color)),
          },
      },
      {
        className: `material-button-root.${variant}-${nextClassName}`,
        rules: {
            ":hover": {
              backgroundColor: darkerColor(
                hexColorToRGB(asureColor(colourNameToHex(color)), 1),
              ),
            },
          },
      },
    ],
  };

  expect(result).toEqual(expected);
});
