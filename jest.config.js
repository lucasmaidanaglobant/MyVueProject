module.exports = {
  verbose: false,
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "\\.(css|jpg|jpeg|png|svg)$": "identity-obj-proxy",
    "^@[/](.+)": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    "src/**/*.(js|ts|vue)",
    "!src/**/*.d.ts",
    "!src/main.ts",
    "!src/sw.ts",
    "!src/services/helpers/importHelper.ts",
    "!src/router/index.ts",
    "!src/store/index.ts",
    "!src/**/*.stories.js",
  ],
};
