<div align="center">

# @sapphire/type

**A simple prompter for your cli.**

[![GitHub](https://img.shields.io/github/license/yukikaze-bot/prompt)](https://github.com/yukikaze-bot/prompt/blob/main/LICENSE.md)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@yukikaze-bot/prompt?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@yukikaze-bot/prompt)
[![npm](https://img.shields.io/npm/v/@yukikaze-bot/prompt?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@yukikaze-bot/prompt)

</div>

**Table of Contents**

-   [@yukikaze-bot/prompt](#yukikaze-botprompt)
    -   [Description](#description)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [Basic Usage](#basic-usage)
    -   [API Documentation](#api-documentation)

## Description

Prompts user input from the cli!

## Features

-   Written in TypeScript
-   Offers CommonJS, ESM bundles
-   Fully tested

## Installation

```sh
yarn add @yukikaze-bot/prompt
# npm install @yukikaze-bot/prompt
```

## Usage

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Type } = require('@yukikaze-bot/prompt')` equals `import { Type } from '@yukikaze-bot/prompt'`.

**Note:** When using ESM syntax you can also default-import `Type` class: `import Type from '@yukikaze-bot/prompt'`.

### Basic Usage

```ts
const { prompt } = require('@yukikaze-bot/prompt');
const response = prompt('What is your name?');

console.log(`Your name is: ${response}`);
```

---

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://yukikaze-bot.github.io/prompt).
