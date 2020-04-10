module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/typescript',
    '@babel/react',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties'
  ],
};
