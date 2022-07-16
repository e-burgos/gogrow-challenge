module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
  },
};
