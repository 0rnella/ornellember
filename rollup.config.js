import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
      file: 'lib/bundle.js',
      format: 'iife',
      compact: true
    },
    plugins: [typescript()]
  };
  