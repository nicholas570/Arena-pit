## Install and config eslint/airbnb/prettier in projects (locally)

### Needed

Node > 12 & Prettier/Eslint extensions

### Install

- git clone https://github.com/nicholas570/Prettier-Eslint-Airbnb-vsc-config.git
- npm install

### Full configuration

- In the project directory, run npm i eslint@6.8.0 --save-dev<br />
- Init eslint with ./node_modules/.bin/eslint --init<br />

Now, you should have .eslintrc.json in your project

### Pluggins

You need to install pluggins to run prettier as eslint rule

- npm install --save-dev eslint-plugin-prettier
- npm install --save-dev --save-exact prettier
- npm install --save-dev eslint-config-prettier
- npx mrm lint-staged

Then add: "extends": ["airbnb", "plugin:prettier/recommended"] in .eslintrc.json

### Config

Change lint-staged rule to

```json
"lint-staged": {
    "src/**/*.{js,jsx}": [
      "./node_modules/.bin/eslint --max-warnings=0",
    ]
  }
```

Create .prettierrc
Add:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

All rules can be dissalowed or modified in .eslintrc.json

```json
"rules": {
  "react/jsx-no-bind": [1, { "allowArrowFunctions": true }],
  "class-methods-use-this": "off"
}
```

**_Make sure all dev dependencies are in package.json_**
