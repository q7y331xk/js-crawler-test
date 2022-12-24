import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  verbose: true,
  rootDir: '.',
  testMatch: [
      "**/?(*)+(test).ts"
  ],
  testEnvironment: "node",
  resetMocks: true,
  clearMocks: true,
  testTimeout: 60 * 1000
}

export default config;