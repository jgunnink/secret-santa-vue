const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  moduleFileExtensions: ["js", "json", "vue", "ts", "tsx", "css"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "<rootDir>/node_modules/ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  },
  testRegex: ".spec.*\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["<rootDir>/test/e2e"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/test/unit/setup"],
  testResultsProcessor: "jest-junit",
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  setupFiles: ["<rootDir>/test/unit/setup"],
};
