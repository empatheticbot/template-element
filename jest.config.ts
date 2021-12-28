import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  collectCoverage: true,
  // eslint-disable-next-line github/unescaped-html-literal
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
}

export default config
