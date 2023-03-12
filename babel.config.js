module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          app: './src',
          actions: './src/actions',
          api: './src/api',
          components: './src/components',
          hooks: './src/hooks',
          icons: './src/icons',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
