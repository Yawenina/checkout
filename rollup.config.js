// import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import flow from 'rollup-plugin-flow';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'

// PostCSS plugins
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    name: 'Nano',
    file: 'dist/checkout.min.js',
    format: 'iife',
    // globals: {
    //   'zoid': 'zoid'
    // }
  },
  // external: ['zoid'],
  plugins: [
    resolve(),
    commonJS({
      include: 'node_modules/zoid/**'
    }),
    flow(),
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
