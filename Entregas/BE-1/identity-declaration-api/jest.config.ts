import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/repositories/**.ts",
    "!<rootDir>/src/routes/index.ts",
    "!<rootDir>/src/app.ts"
  ],

  
  
  collectCoverage: true
};

export default config;