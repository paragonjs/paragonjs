import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip'
import pkg from './package.json'
import { brotliCompress } from 'zlib'
import { promisify } from 'util'

const brotliPromise = promisify(brotliCompress)

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

  // eslint-disable-next-line
  plugins: [gzipPlugin({customCompression: content => brotliPromise(Buffer.from(content)), fileName: '.br'}), resolve(),sass({ insert: true }), typescript()],
  external: ["react", "react/jsx-runtime"],//['react', 'react-dom',"react/jsx-runtime","tiny-invariant"],
}