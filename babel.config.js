module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          "@screens": './src/screens',
          "@components": './src/components',
          "@utils": './src/utils',
          "@redux": './src/redux',
          "@src": './src',
          "@styles": './styles',
         }
      }
    ],
    'jest-hoist'
  ]
};
