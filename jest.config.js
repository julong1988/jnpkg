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
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}'
  ]
};