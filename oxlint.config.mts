import { combine, presets, rules } from '@piplup/code-infra/oxlint';

// The tests here are `*.spec.*` files run by Vitest, so they get the `test` preset's rules too.
const testPreset = {
  ...presets.test,
  overrides: presets.test.overrides?.map((override) => ({
    ...override,
    files: override.files.map((file) => file.replace('.test.', '.spec.')),
  })),
};

const testingLibraryRules = Object.keys(presets.test.overrides?.[0]?.rules ?? {}).filter((rule) =>
  rule.startsWith('testing-library/'),
);

export default combine(presets.recommended, presets.spec, testPreset, {
  overrides: [
    {
      // These tests run in Vitest's browser mode with vitest-browser-react, not Testing Library.
      files: ['packages/rhf-adapters/**/*.spec.*'],
      rules: Object.fromEntries(testingLibraryRules.map((rule) => [rule, 'off'])),
    },
    {
      // The hook tests read `data-cy` attributes from small components.
      files: ['packages/rhf-core/**/*.spec.*'],
      rules: rules({ 'testing-library/no-container': 'off' }),
    },
    {
      // Node.js command-line scripts.
      files: ['scripts/**'],
      rules: rules({ 'compat/compat': 'off', 'no-console': 'off' }),
    },
  ],
  rules: rules({
    // Props taken out of `props` only to leave them out of the rest are named `_name`, as
    // no-unused-vars allows.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        filter: { match: true, regex: '^__(dirname|filename)$' },
        format: null,
        selector: 'variable',
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        selector: 'variable',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'typeLike' },
    ],
  }),
});
