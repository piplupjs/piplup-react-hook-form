# @piplup/rhf-core

[![npm](https://img.shields.io/npm/v/@piplup/rhf-core)](https://www.npmjs.com/package/@piplup/rhf-core)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@piplup/rhf-core)

The primitives behind
[`@piplup/rhf-adapters`](https://www.piplupjs.com/docs/forms): hooks that adapt
any component to a [react-hook-form](https://react-hook-form.com) field, plus a
form container and an error provider. Use it on its own to connect a component
library the adapters don't cover.

**[Documentation](https://www.piplupjs.com/docs/rhf-core/installation)**

## Installation

```bash
npm install @piplup/rhf-core react-hook-form
```

## What's included

- [`useControllerAdapter`](https://www.piplupjs.com/docs/rhf-core/hooks/use-controller-adapter):
  connects a custom input component to a field. Every adapter is built on it.
- [`useFieldState`](https://www.piplupjs.com/docs/rhf-core/hooks/use-field-state):
  reads the validation and interaction state of one field.
- [`useFieldStateAdapter`](https://www.piplupjs.com/docs/rhf-core/hooks/use-field-state-adapter)
  and
  [`useFormStateAdapter`](https://www.piplupjs.com/docs/rhf-core/hooks/use-form-state-adapter):
  turn field or form state into props such as `error`, `helperText` and
  `disabled`, for labels, helper text and buttons.
- [`useFormReset`](https://www.piplupjs.com/docs/rhf-core/hooks/use-form-reset)
  and
  [`useFormSetFocus`](https://www.piplupjs.com/docs/rhf-core/hooks/use-form-set-focus):
  `reset` and `setFocus` from form context or a given `control`.
- [`FormContainer`](https://www.piplupjs.com/docs/rhf-core/components/form-container):
  renders the `<form>` with the form context and error provider in place.
- [`FormErrorProvider`](https://www.piplupjs.com/docs/rhf-core/components/form-error-provider):
  formats every field's error message in one place.

New to these packages? Start with
[Using MUI with React Hook Form](https://www.piplupjs.com/docs/react-hook-form-mui).

## License

MIT
