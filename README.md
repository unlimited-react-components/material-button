<p align="center">
<img align="center" height="150" src="https://user-images.githubusercontent.com/43678736/118854376-49f1f480-b89a-11eb-91f6-a0f59c30c6c4.png" alt="Unlimited React components logologo">

<h1 align="center">  React Material Button</h1>
</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JinSSJ3/react-drop-zone-responsive/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@unlimited-react-components/material-button.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/@unlimited-react-components/material-button)
[![npm latest package](https://img.shields.io/badge/npm%40LTS-1.0.5-magenta)](https://www.npmjs.com/package/@unlimited-react-components/material-button)
[![dependencies Status](https://status.david-dm.org/gh/unlimited-react-components/material-button.svg)](https://david-dm.org/unlimited-react-components/material-button)
[![Build Status](https://www.travis-ci.com/unlimited-react-components/material-button.svg?branch=master)](https://www.travis-ci.com/unlimited-react-components/material-button)
[![install size](https://packagephobia.com/badge?p=@unlimited-react-components/material-button)](https://packagephobia.com/result?p=@unlimited-react-components/material-button)
[![Coverage Status](https://coveralls.io/repos/github/Junlimited-react-components/material-button/badge.svg?branch=master&t=NYfAAW)](https://coveralls.io/github/unlimited-react-components/material-button?branch=master)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/unlimited-react-components/material-button.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/unlimited-react-components/material-button/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/unlimited-react-components/material-button.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/unlimited-react-components/material-button/context:javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/unlimited-react-components/material-button/badge.svg)](https://snyk.io/test/github/unlimited-react-components/material-button)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Description

Material design button implementation in react.js.

## Why reinvent the wheel and create another "material-button"?

Well... I was bored and I needed something to do last sunday.
What is more, it was a challenge for me to create a material button with very few dependencies.

## Installation

Material Button is available as an [npm package](https://www.npmjs.com/package/@unlimited-react-components/material-button).

```sh
// with npm
npm i @unlimited-react-components/material-button
```

# Material Button API

Here is a quick example to get you started, **it's all you need**:

Interactive and live demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/material-button-06eif)

## Props:

| Name     | Type                                                 | Default     | Description                                                       |
| -------- | ---------------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| children | node                                                 | ""          | The content of the button.                                        |
| style    | React.CSSProperties                                  | {}          | The inline style                                                  |
| color    | string                                               | "#071e25"   | The main color for the button. (e.g. "#FFFFFF", "rgb(255,12,45)") |
| variant  | "text" \| "outlined" \| "contained"                  | "contained" | The variant of the button                                         |
| disabled | boolean                                              | false       | If true, the button will be disabled.                             |
| href     | string                                               | undefined   | I present, the url to redirect                                    |
| text     | "uppercase" \| "capitalize" \| "lowercase" \| "none" | "none"      | The text decoration for the button text                           |
| onClick  | Function                                             | () => {}    | The action to perform on click event                              |

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
