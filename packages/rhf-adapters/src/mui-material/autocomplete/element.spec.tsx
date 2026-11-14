import * as React from 'react';

import { TextField, autocompleteClasses } from '@mui/material';
import { FormContainer } from '@piplup/rhf-core';
import { test, expect, describe } from 'vitest';
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';

import { MuiAutocompleteElement } from './element';

describe('MuiAutocompleteElement', () => {
  test('mounts and allows selecting an option', async () => {
    const screen = await render(
      <FormContainer>
        <MuiAutocompleteElement
          name="fruit"
          options={['Apple', 'Banana']}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormContainer>,
    );
    const input = screen.getByRole('combobox');
    await expect.element(input).toBeInTheDocument();

    await userEvent.click(input);
    const option = screen.getByRole('option', {
      name: 'Banana',
    });
    await userEvent.click(option);
    await expect.element(input).toHaveValue('Banana');
  });

  test('renders initial defaultValue', async () => {
    const screen = await render(
      <FormContainer defaultValues={{ fruit: 'Apple' }}>
        <MuiAutocompleteElement
          name="fruit"
          options={['Apple', 'Banana']}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormContainer>,
    );

    const input = screen.getByRole('combobox');

    await expect.element(input).toHaveValue('Apple');
  });

  test('supports multiple values and shows default chips', async () => {
    const screen = await render(
      <FormContainer defaultValues={{ fruit: ['Apple'] }}>
        <MuiAutocompleteElement
          name="fruit"
          options={['Apple', 'Banana', 'Cherry']}
          renderInput={(params) => <TextField {...params} />}
          multiple
        />
      </FormContainer>,
    );

    const input = screen.getByRole('combobox');

    await userEvent.click(input);

    const bananaOption = screen.getByRole('option', {
      name: 'Banana',
    });

    await userEvent.click(bananaOption);

    const chips = screen.container.querySelectorAll(`.${autocompleteClasses.tag}`);

    const chipValues = Array.from(chips).map((chip) => chip.textContent);

    await expect(chipValues).toContain('Apple');
    await expect(chipValues).toContain('Banana');
  });

  test('shows error message when field has a validation error', async () => {
    const screen = await render(
      <FormContainer defaultValues={{}}>
        <MuiAutocompleteElement
          name="fruit"
          options={['Apple', 'Banana']}
          renderInput={(params) => <TextField {...params} label="Fruit" />}
          rules={{ required: 'Select a fruit' }}
        />
        <button type="submit">Submit</button>
      </FormContainer>,
    );

    const submitButton = screen.getByRole('button', {
      name: 'Submit',
    });

    await userEvent.click(submitButton);

    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });
});
