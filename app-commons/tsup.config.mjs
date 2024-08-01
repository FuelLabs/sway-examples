import tsconfig from './tsconfig.json';

const defConfig = {
  outDir: 'dist',
  splitting: true,
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  sourcemap: true,
  clean: false,
  target: tsconfig.compilerOptions.target,
};

export default [
  {
    ...defConfig,
    entry: {
      index: 'src/index.tsx',
    },
    publicDir: 'public',
  },
  {
    entry: {
      styles: 'src/styles/index.css',
    },
    loader: {
      '.css': 'css',
    },
  },
];