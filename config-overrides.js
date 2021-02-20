/* config-overrides.js */
const { override, addLessLoader } = require("customize-cra");

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@base-color": "#eb6331",
        "@font-family-base": "sans-serif",
        "@font-size-base": "14px",
      },
    },
  })
);
