module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react',
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.js',
    '<rootDir>/src/**/*.spec.jsx',
  ],
  moduleNameMapper: {
    '@components/(.+)$': '<rootDir>/src/components/$1',
    '@pages/(.+)$': '<rootDir>/src/pages/$1',
    '@atoms/(.+)$': '<rootDir>/src/atoms/$1',
    '@selectors/(.+)$': '<rootDir>/src/selectors/$1',
    '@hooks/(.+)$': '<rootDir>/src/hooks/$1',
  },
  // ...require('@snowpack/app-scripts-react/jest.config.js')(),
};
