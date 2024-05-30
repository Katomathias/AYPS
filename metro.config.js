
// import { getDefaultConfig } from "metro-config";
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [...assetExts, "tflite"],
      sourceExts,
    },
  };
})();
