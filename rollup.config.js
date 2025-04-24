// rollup.config.js for exporting component as cjs
import babel from '@rollup/plugin-babel';
import url   from '@rollup/plugin-url';

export default {
  input: 'js/index.js',
  external: ['react', 'react-dom'],
  plugins: [
    url({ include: ['**/*.glsl', '**/*.png'], limit: 0 }),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-react'] }),
  ],
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',  
  },
};
