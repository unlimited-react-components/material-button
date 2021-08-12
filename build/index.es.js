function ___$insertStyle(css) {
  if (!css) {
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React, { useState, useEffect, useRef } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

___$insertStyle("@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n.material-button-root {\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: center;\n  text-decoration: none;\n  text-transform: none;\n}\n\n.material-button {\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  overflow: hidden;\n  min-width: 64px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n}\n\n.material-button.uppercase {\n  text-transform: uppercase;\n}\n\n.material-button.lowercase {\n  text-transform: lowercase;\n}\n\n.material-button.capitalize {\n  text-transform: capitalize;\n}\n\n.material-button.contained {\n  padding: 6px 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.material-button.outlined {\n  padding: 5px 15px;\n}\n\n.material-button.text {\n  padding: 5px 15px;\n}\n\n.material-button-root.contained:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.material-button span.label {\n  width: 100%;\n  display: inherit;\n  align-items: inherit;\n  justify-content: inherit;\n}\n\nspan.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 500ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n@keyframes ripple {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n.material-button-root.disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26);\n  padding: 6px 16px;\n}\n\n@media screen and (max-width: 600px) {\n  .material-button {\n    min-width: 30px;\n    font-size: 0.78rem;\n    line-height: 1.5;\n    letter-spacing: 0.025em;\n  }\n\n  .material-button.contained {\n    padding: 4px 13px;\n  }\n\n  .material-button.outlined {\n    padding: 4px 12px;\n  }\n}");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * hexArray & decArray
 *
 * arrays of numbers used to convert hexadecimal numbers into decimal and viceversa
 */
var hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/**
 * Converts hex number in string representation to decimal number
 *
 *
 * @param letter the string hex number
 * @returns a decimal number
 */
var hexTodec = function (letter) {
    if (hexArray.includes(letter)) {
        return decArray[hexArray.indexOf(letter)];
    }
    else {
        return 0;
    }
};
/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 *
 *
 * @param colorInput the color inpt to test
 * @returns true if the inputColor is a hexadecimal css color
 */
var isHexColor = function (colorInput) {
    // if first element is no '#' return default background color
    if (colorInput.charAt(0) !== '#') {
        return false;
    }
    // if color lenght is not exactly 7 return default
    if (colorInput.length !== 7) {
        return false;
    }
    // if one of the letters is not included in hex array return  default
    for (var i = 1; i < colorInput.length; i++) {
        if (!hexArray.includes(colorInput.charAt(i))) {
            return false;
        }
    }
    return true;
};
/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 *
 *
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color
 * @returns the rgba representation of a hex color
 */
var hexColorToRGB = function (colorInput, perc, defaultColor) {
    if (perc === void 0) { perc = 0; }
    var resultDefault = defaultColor ? defaultColor : "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    //work only in uppercase
    var color = colorInput.toUpperCase();
    // is already a rgba color
    if (color.includes("RGBA")) {
        return color;
    }
    //return rbg => rgba
    if (color.includes("RGB")) {
        return color.replace('RGB', "rgba").replace(')', ", " + perc + ")");
    }
    // if is a hex color or named color
    if (!isHexColor(colourNameToHex(color))) {
        return resultDefault;
    }
    var resultOk = "";
    //let strVar: string = "";
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    //If passed all validations, proceed to transform
    component1 = hexTodec(color.charAt(1)) * 16 + hexTodec(color.charAt(2));
    component2 = hexTodec(color.charAt(3)) * 16 + hexTodec(color.charAt(4));
    component3 = hexTodec(color.charAt(5)) * 16 + hexTodec(color.charAt(6));
    resultOk = "rgba(" + component1 + ", " + component2 + "," + component3 + " , " + perc + ")";
    return resultOk;
};
/**
 * Make the color into a darker color
 * @param colorInput
 * @returns the darked color in
 */
var darkerColor = function (colorInput, percentage) {
    if (percentage === void 0) { percentage = 25; }
    var darkedColor = "";
    var reduce = (100 - percentage) / 100;
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    if (isHexColor(colourNameToHex(colorInput))) {
        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));
        darkedColor = "rgb(" + component1 * reduce + ", " + component2 * reduce + "," + component3 * reduce + ")";
    }
    else {
        if (colorInput.includes("rgba")) {
            var slicer = colorInput.replace("rgba(", "");
            var components = slicer.split(",");
            darkedColor = "rgb(" + parseInt(components[0], 10) * reduce + ", " + parseInt(components[1], 10) * reduce + "," + parseInt(components[2], 10) * reduce + ")";
            //return darkedColor;
        }
        else if (colorInput.includes("rgb")) {
            var slicer = colorInput.replace("rgb(", "");
            var components = slicer.split(",");
            darkedColor = "rgb(" + parseInt(components[0], 10) * reduce + ", " + parseInt(components[1], 10) * reduce + "," + parseInt(components[2], 10) * reduce + ")";
            // return darkedColor;
        }
    }
    return darkedColor;
};
/**
 * Merge props that com form user and those ones that are default
 * if incommingStyle is null this returns teh default value
 *
 * @param incommingProps prop that comes from props attributoo of a React Node
 * @param defaultProps default prop defined for that  React Node
 * @returns merged props
 */
function mergeProps(incommingProps, defaultProps) {
    if (!incommingProps) {
        return defaultProps;
    }
    else {
        return __assign(__assign({}, defaultProps), incommingProps);
    }
}
/**
 * Asure a base colour when not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
var asureColor = function (color) {
    if (color !== undefined && color !== "") {
        return color;
    }
    else {
        return "#5d6475";
    }
};
/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
function colourNameToHex(colour) {
    /**
     * When not given
     */
    if (!colour) {
        return "";
    }
    /**
     * when named color is found
     */
    if (namedColours2[colour.toLocaleLowerCase()] !== undefined) {
        return namedColours2[colour.toLocaleLowerCase()];
    }
    /**
     * When the named color was not found
     */
    return colour;
}
/**
 * The full list of named Colors provided by
 * https://htmlcolorcodes.com/es/nombres-de-los-colores/
 */
var namedColours2 = {
    //RED
    indianred: "#CD5C5C",
    lightcoral: "#F08080",
    salmon: "#FA8072",
    darksalmon: "#E9967A",
    lightsalmon: "#FFA07A",
    crimson: "#DC143C",
    red: "#FF0000",
    firebrick: "#B22222",
    darkred: "#8B0000",
    //PINK
    pink: "#FFC0CB",
    lightpink: "#FFB6C1",
    hotpink: "#FF69B4",
    deeppink: "#FF1493",
    mediumvioletred: "#C71585",
    palevioletred: "#DB7093",
    //ORANGE
    //"lightsalmon: "#FFA07A",
    coral: "#FF7F50",
    tomato: "#FF6347",
    orangered: "#FF4500",
    darkorange: "#FF8C00",
    orange: "#FFA500",
    //YELLOW
    gold: "#FFD700",
    yellow: "#FFFF00",
    lightyellow: "#FFFFE0",
    lemonchiffon: "#FFFACD",
    lightgoldenrodyellow: "#FAFAD2",
    papayawhip: "#FFEFD5",
    moccasin: "#FFE4B5",
    peachpuff: "#FFDAB9",
    palegoldenrod: "#EEE8AA",
    khaki: "#F0E68C",
    darkkhaki: "#BDB76B",
    //PURPLE
    lavender: "#E6E6FA",
    thistle: "#D8BFD8",
    plum: "#DDA0DD",
    violet: "#EE82EE",
    orchid: "#DA70D6",
    fuchsia: "#FF00FF",
    magenta: "#FF00FF",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    rebeccapurple: "#663399",
    blueviolet: "#8A2BE2",
    darkviolet: "#9400D3",
    darkorchid: "#9932CC",
    darkmagenta: "#8B008B",
    purple: "#800080",
    indigo: "#4B0082",
    slateblue: "#6A5ACD",
    darkslateblue: "#483D8B",
    mediumslateblue: "#7B68EE",
    //GREEN
    greenyellow: "#ADFF2F",
    chartreuse: "#7FFF00",
    lawngreen: "#7CFC00",
    lime: "#00FF00",
    limegreen: "#32CD32",
    palegreen: "#98FB98",
    lightgreen: "#90EE90",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    mediumseagreen: "#3CB371",
    seagreen: "#2E8B57",
    forestgreen: "#228B22",
    green: "#008000",
    darkgreen: "#006400",
    yellowgreen: "#9ACD32",
    olivedrab: "#6B8E23",
    olive: "#808000",
    darkolivegreen: "#556B2F",
    mediumaquamarine: "#66CDAA",
    darkseagreen: "#8FBC8B",
    lightseagreen: "#20B2AA",
    darkcyan: "#008B8B",
    teal: "#008080",
    //BLUE
    aqua: "#00FFFF",
    cyan: "#00FFFF",
    lightcyan: "#E0FFFF",
    paleturquoise: "#AFEEEE",
    aquamarine: "#7FFFD4",
    turquoise: "#40E0D0",
    mediumturquoise: "#48D1CC",
    darkturquoise: "#00CED1",
    cadetblue: "#5F9EA0",
    steelblue: "#4682B4",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    lightblue: "#ADD8E6",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    deepskyblue: "#00BFFF",
    dodgerblue: "#1E90FF",
    cornflowerblue: "#6495ED",
    //"mediumslateblue: "#7B68EE",
    royalblue: "#4169E1",
    blue: "#0000FF",
    mediumblue: "#0000CD",
    darkblue: "#00008B",
    navy: "#000080",
    midnightblue: "#191970",
    //BROWN
    cornsilk: "#FFF8DC",
    blanchedalmond: "#FFEBCD",
    bisque: "#FFE4C4",
    navajowhite: "#FFDEAD",
    wheat: "#F5DEB3",
    burlywood: "#DEB887",
    tan: "#D2B48C",
    rosybrown: "#BC8F8F",
    sandybrown: "#F4A460",
    goldenrod: "#DAA520",
    darkgoldenrod: "#B8860B",
    peru: "#CD853F",
    chocolate: "#D2691E",
    saddlebrown: "#8B4513",
    sienna: "#A0522D",
    brown: "#A52A2A",
    maroon: "#800000",
    //WHITE
    white: "#FFFFFF",
    snow: "#FFFAFA",
    honeydew: "#F0FFF0",
    mintcream: "#F5FFFA",
    azure: "#F0FFFF",
    aliceblue: "#F0F8FF",
    ghostwhite: "#F8F8FF",
    whitesmoke: "#F5F5F5",
    seashell: "#FFF5EE",
    beige: "#F5F5DC",
    oldlace: "#FDF5E6",
    floralwhite: "#FFFAF0",
    ivory: "#FFFFF0",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lavenderblush: "#FFF0F5",
    mistyrose: "#FFE4E1",
    //GREY
    gainsboro: "#DCDCDC",
    lightgray: "#D3D3D3",
    silver: "#C0C0C0",
    darkgray: "#A9A9A9",
    gray: "#808080",
    dimgray: "#696969",
    lightslategray: "#778899",
    slategray: "#708090",
    darkslategray: "#2F4F4F",
    black: "#000000"
};

/**
 * In order to avoid overwriting the classnames
 * and to be able to have different styled buttons in the document
 * it is necesary to add a numeric identifier next to the className:
 *      instead of:  ".classname"
 *      we get    :  ".classname-3", ".classname-4", ".classname-5" and so on
 * for this task a number is used as ID
 */
var MaterialButtonStylizer = /** @class */ (function () {
    function MaterialButtonStylizer() {
    }
    /**
     * Increases the count and retrieves the next number
     * @returns the next static number in styles
     */
    MaterialButtonStylizer.getNext = function () {
        MaterialButtonStylizer.nextButtonClassNameNumber++;
        return MaterialButtonStylizer.nextButtonClassNameNumber;
    };
    MaterialButtonStylizer.nextButtonClassNameNumber = 0;
    return MaterialButtonStylizer;
}());
/**
 * Calls the getNext() method of MaterialButtonStylizer class
 * @returns the next static number in styles
 */
var getNextClassName = function () {
    return MaterialButtonStylizer.getNext();
};
/**
   * Creates the ripple effect
   * @param event
   */
function createRipple(event, variant, color) {
    var buttonAnchorDiv = event.currentTarget;
    var circle = document.createElement("span");
    var diameter = Math.max(buttonAnchorDiv.clientWidth, buttonAnchorDiv.clientHeight);
    var radius = diameter / 2;
    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = event.clientX - buttonAnchorDiv.offsetLeft - radius + "px";
    circle.style.top = event.clientY - buttonAnchorDiv.offsetTop - radius + "px";
    circle.classList.add("ripple");
    if (variant !== "contained") {
        circle.style.backgroundColor = hexColorToRGB(asureColor(colourNameToHex(color)), 0.4);
    }
    else {
        circle.style.backgroundColor = hexColorToRGB("#ffffff", 0.4);
    }
    var ripple = buttonAnchorDiv.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    buttonAnchorDiv.appendChild(circle);
}
var makeDynamicStyle = function (variant, disabled, color, textColor, nextClassName) {
    var styleSheet = {
        id: "material-button-styles" + "-" + nextClassName,
        sheetRules: [{
                className: "material-button." + variant + "-" + nextClassName,
                rules: {},
            },
            {
                className: "material-button-root." + variant + "-" + nextClassName,
                rules: {},
            },],
    };
    var sheetRules = styleSheet.sheetRules;
    if (!disabled) {
        switch (variant) {
            case "contained":
                sheetRules[0].rules = {
                    color: asureColor(colourNameToHex(textColor)),
                    backgroundColor: asureColor(colourNameToHex(color)),
                };
                sheetRules[1].rules = {
                    ":hover": {
                        backgroundColor: darkerColor(hexColorToRGB(asureColor(colourNameToHex(color)), 1)),
                    },
                };
                break;
            case "outlined":
                sheetRules[0].rules = {
                    border: "1px solid " + hexColorToRGB(asureColor(colourNameToHex(color)), 0.5),
                    color: asureColor(colourNameToHex(color)),
                    backgroundColor: "transparent",
                };
                sheetRules[1].rules = {
                    ":hover": {
                        border: "1px solid " + hexColorToRGB(asureColor(colourNameToHex(color)), 1),
                        backgroundColor: hexColorToRGB(asureColor(colourNameToHex(color)), 0.085),
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
                        backgroundColor: hexColorToRGB(asureColor(colourNameToHex(color)), 0.085),
                    },
                };
                break;
        }
    }
    styleSheet.sheetRules = sheetRules;
    return styleSheet;
};

//export type ThemeColor = "primary" | "secondary";
/**
 * default props for material button
 */
var MaterialButtonDefaultProps = {
    children: undefined,
    style: {},
    onClick: function () { },
    variant: "contained",
    disabled: false,
    color: "#071e25",
    textColor: "#FFFFFF",
    text: "uppercase"
};

var DynamiCSS;
(function (DynamiCSS) {
    function insertStyleSheet(dynamicSheet) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (!dynamicSheet) {
            return "";
        }
        //if already exists
        if (document.getElementById(dynamicSheet.id)) {
            return dynamicSheet.id;
        }
        result_id = dynamicSheet.id;
        var styleSheet = document.createElement("style");
        styleSheet.id = result_id;
        styleSheet.setAttribute("type", "text/css");
        var contetRaw = toRawStyleSheet(dynamicSheet.sheetRules || []) + dynamicSheet.raw || "";
        styleSheet.textContent = contetRaw;
        var appendResult = document.head.appendChild(styleSheet);
        if (!appendResult) {
            return "";
        }
        return result_id;
    }
    DynamiCSS.insertStyleSheet = insertStyleSheet;
    function editStyleSheet(id, sheetRules) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (!id || !sheetRules) {
            return "";
        }
        //if dont exists yet
        var styleSheet = document.getElementById(id);
        if (!styleSheet) {
            return "";
        }
        /*  result_id = id;
         //var styleSheet: HTMLStyleElement = document.createElement("style");
         styleSheet.id = result_id;
         styleSheet.setAttribute("type", "text/css"); */
        styleSheet.textContent = toRawStyleSheet(sheetRules);
        return result_id;
    }
    DynamiCSS.editStyleSheet = editStyleSheet;
    function removeStyleSheet(id) {
        var result_id = "";
        if (!id) {
            return "";
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            document.head.removeChild(htmlObject);
            result_id = id;
        }
        return result_id;
    }
    DynamiCSS.removeStyleSheet = removeStyleSheet;
    function existStyleSheet(id) {
        if (!id) {
            return false;
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            return true;
        }
        return false;
    }
    DynamiCSS.existStyleSheet = existStyleSheet;
    function makeStyleSheet(styleSheet) {
        if (!styleSheet) {
            return null;
        }
        return styleSheet;
    }
    DynamiCSS.makeStyleSheet = makeStyleSheet;
})(DynamiCSS || (DynamiCSS = {}));
/**
 * Determines whether a character is upperCase or not
 * @param str a character
 * @returns true if str contains a string character
 */
function isUpper(character) {
    if (!character)
        return false;
    return !/[a-z]/.test(character) && /[A-Z]/.test(character);
}
/**
 * Converts a rule with uppercase to a hyphen-lowercase version
 * @param rule the rule
 * @returns
 */
function fromUpperCaseToHyphen(ruleLabel) {
    var result = "";
    var charUpper = ' ';
    var isupper = false;
    for (var i = 0; i < ruleLabel.length; i++) {
        var currentChar = ruleLabel[i];
        if (isUpper(currentChar)) {
            charUpper = currentChar;
            isupper = true;
            break;
        }
    }
    //add hyphen
    if (isupper) {
        var parts = ruleLabel.split(charUpper);
        result = parts[0] + "-" + charUpper.toLowerCase() + parts[1];
    }
    else {
        result = ruleLabel;
    }
    return result;
}
/**
 *
 * @param ruleLabel the rule
 * @returns true if the rule label corresponds to a pseudo class
 */
function isPseudo(ruleLabel) {
    if (!ruleLabel)
        return false;
    return ruleLabel.includes(":");
}
function makeRawRuleLabel(className) {
    var result = "";
    var splitedClassName = className.trim().split(" ");
    //is composed classname?
    if (splitedClassName.length > 1) {
        for (var i = 0; i < splitedClassName.length; i++) {
            result += "." + splitedClassName[i];
        }
        result += "{\n";
    }
    else {
        result += "." + className + "{\n";
    }
    return result;
}
function toRawStyleSheet(sheetRules) {
    if (!sheetRules) {
        return "";
    }
    var rawStyleSheet = "";
    var nestedPseudos = [];
    for (var j = 0; j < sheetRules.length; j++) {
        var currentRule = sheetRules[j];
        var currnetRawRule = "";
        // currnetRawRule += `.${currentRule.className}{\n`;
        currnetRawRule += makeRawRuleLabel(currentRule.className);
        //list of labels for rules
        var ruleskeys = Object.keys(currentRule.rules);
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen(currentKey);
            //if a pseudo class found, separate it
            if (isPseudo(styleLabel)) {
                var pseudoClassName = currentRule.className + styleLabel;
                nestedPseudos.push({ className: pseudoClassName, rules: currentRule.rules[styleLabel] });
            }
            else {
                var styleRule = currentRule.rules[currentKey];
                currnetRawRule += "\t" + styleLabel + " : " + styleRule + ";\n";
            }
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    //nested pseudos
    for (var p = 0; p < nestedPseudos.length; p++) {
        var currnetRawRule = "";
        var currentRule = nestedPseudos[p];
        var ruleskeys = Object.keys(currentRule.rules);
        currnetRawRule += "." + currentRule.className + "{\n";
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen(currentKey);
            var styleRule = currentRule.rules[currentKey];
            currnetRawRule += "\t" + styleLabel + " : " + styleRule + ";\n";
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    return rawStyleSheet;
}

var MaterialButton = function (props) {
    var _a = mergeProps(props, MaterialButtonDefaultProps), children = _a.children, onClick = _a.onClick, disabled = _a.disabled, style = _a.style, href = _a.href, variant = _a.variant, color = _a.color, textColor = _a.textColor, className = _a.className, text = _a.text;
    //states
    var _b = useState(""), idStyles = _b[0], setIdStyles = _b[1];
    var _c = useState(false), styleInjected = _c[0], setStyleInjected = _c[1];
    var _d = useState(0), nextClassName = _d[0], setNextClassName = _d[1];
    var _e = useState(""), classNameCreated = _e[0], setClassNameCreated = _e[1];
    //effects
    useEffect(function () {
        return function () { return removeStyle(); };
    }, [idStyles]);
    /**
     * Inserts the style for material button specific style
     * @param variant
     * @param disabled
     * @param color
     * @param textColor
     * @param text
     */
    var handleInserStyle = function (variant, disabled, color, textColor, text) { return __awaiter(void 0, void 0, void 0, function () {
        var class_name, styleSheet, idStyle, nextClassNameVar;
        return __generator(this, function (_a) {
            class_name = className || "";
            idStyle = "";
            if (nextClassName == 0 && !styleInjected) {
                //new
                nextClassNameVar = getNextClassName();
                styleSheet = makeDynamicStyle(variant, disabled, color, textColor, nextClassNameVar);
                setNextClassName(nextClassNameVar);
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                makeClassName(variant, class_name, nextClassNameVar);
                setIdStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            }
            else {
                //already a stylesheet associated
                styleSheet = makeDynamicStyle(variant, disabled, color, textColor, nextClassName);
                idStyle = DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
                makeClassName(variant, class_name, nextClassName);
            }
            return [2 /*return*/];
        });
    }); };
    /**
     *
     * @param variant
     * @param class_name
     */
    var makeClassName = function (variant, class_name, nextClassNameVar) {
        var classname = "material-button-root material-button ";
        if (!disabled) {
            classname += variant + " " + variant + "-" + nextClassNameVar;
        }
        else {
            classname += "disabled";
        }
        //classname to override styles in stylesheet
        if (class_name) {
            classname += " " + classname + " " + class_name;
        }
        //some text in className
        if (text) {
            classname += " " + text;
        }
        setClassNameCreated(classname);
    };
    var removeStyle = function () {
        if (styleInjected) {
            DynamiCSS.removeStyleSheet(idStyles);
            setStyleInjected(false);
            setIdStyles("");
        }
    };
    useEffect(function () {
        handleInserStyle(variant, disabled, color, textColor);
    }, [variant, disabled, color, textColor, text]);
    //references
    var btn_ref = useRef(null);
    var span_ref = useRef(null);
    /**
     *
     * @param e
     */
    function handleClick(e) {
        createRipple(e, variant, color);
        if (onClick)
            onClick();
    }
    return (React.createElement(React.Fragment, null, styleInjected &&
        React.createElement(href ? "a" : "button", {
            className: classNameCreated,
            "data-testid": href ? "material-anchor" : "material-button",
            onClick: handleClick,
            ref: btn_ref,
            href: href,
            style: style,
            children: href ? (React.createElement("span", { ref: span_ref, className: "label" }, children)) : (React.createElement("span", { className: "label" }, children)),
            disabled: disabled,
        })));
};

export { MaterialButton };
//# sourceMappingURL=index.es.js.map
