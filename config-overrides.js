const {
  addBabelPresets,
  addBabelPlugins,
  override,
} = require('customize-cra');

module.exports = override(
  ...addBabelPresets([
    "@babel/preset-typescript",
  ]),
  ...addBabelPlugins(
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  )
);