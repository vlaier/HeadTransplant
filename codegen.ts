import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost/wordpress/graphql',
  documents: 'src/lib/*.graphql',
  generates: {
    'src/lib/codegenOutput/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
