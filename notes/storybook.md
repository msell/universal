Set up storybook for web

we could set it to run on the native apps or perhaps both, but I'm just supporting it on web for now.

`npx -p @storybook/cli sb init --type react`

delete `stories` folder
delete `.storybook/main.js`

`touch .storybook/webpack.config.js`

```
const { resolve } = require('path');
const withUnimodules = require('@expo/webpack-config/withUnimodules');

module.exports = ({ config }) => {
  return withUnimodules(
    config,
    { projectRoot: resolve(__dirname, '../') }
  );
};
```
