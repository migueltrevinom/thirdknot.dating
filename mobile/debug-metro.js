try {
	const { getDefaultConfig } = require("expo/metro-config");
	console.log("Loaded expo/metro-config");
	const { withNativeWind } = require("nativewind/metro");
	console.log("Loaded nativewind/metro");

	const config = getDefaultConfig(__dirname);
	console.log("Got default config");

	const result = withNativeWind(config, { input: "./global.css" });
	console.log("Applied withNativeWind");
} catch (error) {
	console.error("Error debugging metro config:", error);
}
