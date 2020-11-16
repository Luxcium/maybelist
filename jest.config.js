module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test)?\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage:true,
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: './coverage',
  coverageReporters:["json", "lcov", "text", "clover"]
};
