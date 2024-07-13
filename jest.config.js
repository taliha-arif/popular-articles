module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    "^axios$": "axios/dist/node/axios.cjs",
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx}"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
