module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleNameMapper: {
    "@/(.*)":  "<rootDir>/src/$1",
  },
  setupFiles: ['<rootDir>/src/jest/setupFiles.js'],
  testResultsProcessor: 'jest-sonar-reporter',
};