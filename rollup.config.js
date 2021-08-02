import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescriptPlugin from 'rollup-plugin-typescript2';
import typescript from 'typescript';

import pkg from './package.json';

export default {
  input: './index.ts',

  output: [
    process.env.NODE_ENV === 'production' && {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'dist/esm',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],

  external: [
    '@emotion/react',
    '@emotion/styled',
    ...Object.keys(pkg.peerDependencies || {}),
  ],

  plugins: [
    nodeResolve(),
    commonjs(),
    image(),
    typescriptPlugin({
      clean: true,
      tsconfig: 'tsconfig.json',
      typescript,
    }),
    process.env.NODE_ENV === 'production' && terser(),
  ],
};
