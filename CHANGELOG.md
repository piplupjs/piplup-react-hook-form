## 5.0.2 (2026-10-16)

- test(rhf-adapters): fix flaky desktop date-time picker test (5a02425)
- ci: install dependencies before upgrading npm (87662c4)
- ci: add manually triggered release workflow (6a80edc)
- chore: point repository URLs to the piplupjs organization (04ac268)
- fix(rhf-adapters): attach the field ref to the input so focus-on-error works (410c0b3)
- fix(mui-x-date-pickers): keep adapter-only props off calendar DOM elements (48c9f5c)
- fix(mui-x-date-pickers): mark TimePicker fields as touched on text field blur (5b93d6a)
- fix(mui-x-date-pickers): keep built-in validation alongside a custom rules.validate (08baa6b)
- fix(rhf-core): remove the unbuilt ./utils export (df3697e)
- fix(rhf-core): report isSubmitting from useFieldState (5316b14)
- fix(rhf-core): don't mutate the rules object passed to useComposeRules (0f257c5)
- fix(rhf-core): add min/max rules when the limit is 0 (e9da8c1)
- fix(rhf-core): pass rule values to message functions as separate arguments (2d74c5b)
- fix: correct time validation messages (f446771)
- Remove npm bundle size badges from README (ecc7e74)
- chore(deps): update dependency @types/node to v25.9.3 (ab94b25)
- chore(deps): update dependency semver to v7.8.4 (e72bed7)
- chore(deps): update oxlint monorepo to v1.69.0 (65ec3e4)
- chore(deps): update dependency oxfmt to ^0.54.0 (d16d2d6)
- chore(deps): update dependency oxlint to v1.68.0 (9e4e372)
- chore(deps): update dependency oxfmt to ^0.53.0 (05ae962)
- chore(deps): update dependency tsx to v4.22.4 (a20dc08)
- chore(deps): update commitlint monorepo to v21.0.2 (a234180)
- chore(deps): update dependency semver to v7.8.1 (a7fc008)
- chore(deps): update dependency @types/node to v25.9.1 (021171a)
- fix: support @mui/x-date-pickers v8 for backward compatibility (bfbdd27)
- chore(deps): update dependency tsx to v4.22.0 (673f651)
- chore(deps): update dependency @types/node to v25.8.0 (6b26759)
- Update README.md (ce5ae4e)
- chore: check if git working tree is clean before release and added colors (a42aed9)
- Update README.md (bcf301f)
- Add renovate.json (1912560)

## 5.0.0 (2026-05-13)

- chore: updated release script (fe4e23c)
- chore: fix typo in release script (6f9e57f)
- chore: updated release script (826ddb1)
- chore: added missing artifcats to package.json (477b7ca)
- chore: removed nx, cypress, prettier and added vitest, oxfmt and new workflow (7d7efb2)
- chore(deps): update vitest monorepo to v4.1.6 (ec1792f)
- chore(deps): update dependency react-hook-form to v7.75.0 (ce91f57)
- chore(deps): update dependency vite to v8.0.12 (7ad2dff)
- chore(deps): update commitlint monorepo to v20.5.3 (c39068a)
- chore(deps): update dependency @swc/core to v1.15.33 (e833f2f)
- chore(deps): update dependency oxlint to v1.63.0 (74b5ce7)
- chore(deps): update material-ui monorepo (1ad7f53)
- chore(deps): update dependency cypress to v15.14.2 (0a4a9a1)
- chore(deps): update nx monorepo to v22.7.1 (4b97027)
- chore: update dependencies (cd974a3)
- chore: remove eslint and use oxlint (3dbb3d3)
- chore: migrate nx to latest version (4b86254)
- fix: added error, helperText and required prop for renderInput in Autocomplete (4137e53)
- chore: nx.json updated dependency graph for release (de19f35)
- chore: enable nx cache (da6e00f)

## 4.5.0 (2026-01-27)

### 🚀 Features

- updated modifier state to use invalid state for boolean error state
  ([487896f](https://github.com/sadik-malik/piplup-react-hook-form/commit/487896f))

### 🩹 Fixes

- typescript type issues with x-date-pickers
  ([67fd5b7](https://github.com/sadik-malik/piplup-react-hook-form/commit/67fd5b7))
- type exports for loading-button
  ([7adbce9](https://github.com/sadik-malik/piplup-react-hook-form/commit/7adbce9))

### ❤️ Thank You

- sadik-malik

## 4.4.0 (2026-01-04)

This was a version bump only, there were no code changes.

## 4.3.0 (2026-01-04)

### 🩹 Fixes

- typescript warnings for useComposePickerRules
  ([c18e9a0](https://github.com/sadik-malik/piplup-react-hook-form/commit/c18e9a0))

### ❤️ Thank You

- sadik-malik

## 4.2.0 (2026-01-03)

### 🩹 Fixes

- react 19 upgrade issues
  ([c1b758f](https://github.com/sadik-malik/piplup-react-hook-form/commit/c1b758f))

### ❤️ Thank You

- sadik-malik

## 4.1.0 (2026-01-03)

### 🚀 Features

- dropped react 18 support, react-hook-form minimum version will be 7.65.0 and
  configured workspace for cypress based component testing
  ([ad8a8a3](https://github.com/sadik-malik/piplup-react-hook-form/commit/ad8a8a3))

### ❤️ Thank You

- sadik-malik

## 4.0.1 (2025-08-03)

### 🩹 Fixes

- **rhf-adapters:** export path for html adapters and components
  ([adaea70](https://github.com/sadik-malik/piplup-react-hook-form/commit/adaea70))

### ❤️ Thank You

- sadik-malik

# 4.0.0 (2025-08-03)

### 🚀 Features

- add release script
  ([e31ccea](https://github.com/sadik-malik/piplup-react-hook-form/commit/e31ccea))
- added CI & release workflow
  ([bcb5a57](https://github.com/sadik-malik/piplup-react-hook-form/commit/bcb5a57))
- **rhf-core:** added useFormSetFocus hook
  ([187081e](https://github.com/sadik-malik/piplup-react-hook-form/commit/187081e))

### ❤️ Thank You

- sadik-malik
