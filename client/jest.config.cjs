module.exports = {
	collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
	coverageReporters: ["json", "lcov", "text-summary", "clover"],
	coverageThreshold: {
		global: {
			statements: 95,
			branches: 95,
			lines: 95,
			functions: 95,
		},
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub",
	},
	transformIgnorePatterns: [
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
		"^.+\\.module\\.(css|sass|scss)$",
	],
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
		"src/(.*)$": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv: ["./src/setupTests.ts"],
	testEnvironment: "jsdom",
};
