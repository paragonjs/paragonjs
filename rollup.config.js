import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],

  plugins: [resolve(),sass({ insert: true }), typescript()],
  external: ['react', 'react-dom',"react/jsx-runtime","tiny-invariant"],
}