import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

// PostCSS plugins
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.ts',
  output: {
    name: 'checkout',
    file: 'dist/checkout.min.js',
    format: 'iife'
  },
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: [ '.css' ]
    }),
    production && uglify(),
  ]
}
