# possessive

A simple helper function that lets you get a possessive form of a string.

Courtesy of [ruby possessive gem](https://github.com/bclubb/possessive).

Note: For those wishing to avoid this NPM dependency, the following one-liner function is functionally equivalent:

```javascript
function possessive(s) {
  return s ? (s + (s.substr(-1) == 's' ? '\'' : '\'s')) : s;
}
```

## Instalation

```bash
npm install --save @wardrakus/possessive

yarn add @wardrakus/possessive
```

## How to use

```javascript
import possessive from 'possessive';

possessive('Chris');
// Chris’

possessive('Diane');
// Diane’s
```

Enjoy!

## Installation

* `git clone` this repository
* `npm install`
