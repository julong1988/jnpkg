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
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 5,
      lines: 5,
      statements: 5,
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/scripts/config/*.js'
  ]
};
