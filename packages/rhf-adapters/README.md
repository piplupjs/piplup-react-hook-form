# @piplup/rhf-adapters

[![npm](https://img.shields.io/npm/v/@piplup/rhf-adapters)](https://www.npmjs.com/package/@piplup/rhf-adapters)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@piplup/rhf-adapters)

Connect MUI, MUI X date pickers and native inputs to
[react-hook-form](https://react-hook-form.com) without writing a `Controller`
for every field. Every adapter comes as an element that renders the component
and a hook that returns its props, built on
[`@piplup/rhf-core`](https://www.piplupjs.com/docs/rhf-core/installation).

**[Documentation](https://www.piplupjs.com/docs/forms)** ·
[Using MUI with React Hook Form](https://www.piplupjs.com/docs/react-hook-form-mui)
·
[Date pickers with React Hook Form](https://www.piplupjs.com/docs/react-hook-form-date-picker)

## Installation

```bash
npm install @piplup/rhf-adapters @piplup/rhf-core react-hook-form
```

Then install the peer dependencies for the subpaths you use, such as
`@mui/material` or `@mui/x-date-pickers`.

## Usage

```tsx
import {
  MuiButtonElement,
  MuiTextFieldElement,
} from '@piplup/rhf-adapters/mui-material';
import { useForm } from 'react-hook-form';

export function SignUpForm() {
  const { control, handleSubmit } = useForm({ defaultValues: { email: '' } });

  return (
    <form noValidate onSubmit={handleSubmit((values) => console.log(values))}>
      <MuiTextFieldElement
        control={control}
        name="email"
        type="email"
        label="Email"
        required
        messages={{ required: 'Enter your email' }}
      />
      <MuiButtonElement control={control} type="submit" variant="contained">
        Sign up
      </MuiButtonElement>
    </form>
  );
}
```

`required`, `min`, `max`, `minLength`, `maxLength` and `pattern` become
react-hook-form rules with readable default messages, and errors show as the
field's helper text.

## What's included

| Import from                                        | Adapts                                                                                                            | Docs                                                                                               |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `@piplup/rhf-adapters/mui-material`                | TextField, Select, Autocomplete, Checkbox, Radio, Switch, Slider, Rating, inputs, labels, helper text and buttons | [MUI Material](https://www.piplupjs.com/docs/rhf-adapters/mui-material/installation)               |
| `@piplup/rhf-adapters/mui-x-date-pickers`          | Date, time and date-time pickers, fields, calendars and clocks                                                    | [MUI X Date Pickers](https://www.piplupjs.com/docs/rhf-adapters/mui-x-date-pickers/installation)   |
| `@piplup/rhf-adapters/html`                        | Native input, textarea, label, button and helper text                                                             | [HTML](https://www.piplupjs.com/docs/rhf-adapters/html/installation)                               |
| `@piplup/rhf-adapters/mui-tel-input`               | mui-tel-input                                                                                                     | [mui-tel-input](https://www.piplupjs.com/docs/rhf-adapters/mui-tel-input/installation)             |
| `@piplup/rhf-adapters/mui-file-input`              | mui-file-input                                                                                                    | [mui-file-input](https://www.piplupjs.com/docs/rhf-adapters/mui-file-input/installation)           |
| `@piplup/rhf-adapters/mui-chips-input`             | mui-chips-input                                                                                                   | [mui-chips-input](https://www.piplupjs.com/docs/rhf-adapters/mui-chips-input/installation)         |
| `@piplup/rhf-adapters/mui-color-input`             | mui-color-input                                                                                                   | [mui-color-input](https://www.piplupjs.com/docs/rhf-adapters/mui-color-input/installation)         |
| `@piplup/rhf-adapters/mui-one-time-password-input` | mui-one-time-password-input                                                                                       | [OTP input](https://www.piplupjs.com/docs/rhf-adapters/mui-one-time-password-input/installation)   |
| `@piplup/rhf-adapters/react-number-format`         | NumericFormat, PatternFormat, NumberFormatBase                                                                    | [react-number-format](https://www.piplupjs.com/docs/rhf-adapters/react-number-format/installation) |

Coming from react-hook-form-mui? See
[how the two compare](https://www.piplupjs.com/docs/rhf-adapters-vs-react-hook-form-mui).

## License

MIT
