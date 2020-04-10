module.exports = {
  rootDir: '.',
  coverageDirectory: '<rootDir>/__coverage__/',
  coverageReporters: ['lcov', 'text'],
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^~/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(ts|js)x?$': 'babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.{ts,tsx}',
  ],
};
