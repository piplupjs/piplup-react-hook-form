import * as React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormContainer } from '@piplup/rhf-core';
import dayjs from 'dayjs';
import { describe, test, expect } from 'vitest';
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';

import { MuiXStaticDatePickerElement } from './element';

describe('MuiXStaticDatePickerElement', () => {
  test('renders with a default selected date', async () => {
    const target = dayjs('2021-02-14');

    const screen = await render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormContainer defaultValues={{ date: target }}>
          <MuiXStaticDatePickerElement name="date" />
        </FormContainer>
      </LocalizationProvider>,
    );

    const day = screen.getByRole('gridcell', {
      name: target.format('D'),
    });

    await expect.element(day).toHaveAttribute('aria-selected', 'true');
  });

  test('selects a day when clicked (renders specified month)', async () => {
    const target = dayjs('2021-03-10');

    const screen = await render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormContainer defaultValues={{ date: dayjs('2021-03-01') }}>
          <MuiXStaticDatePickerElement name="date" />
        </FormContainer>
      </LocalizationProvider>,
    );

    const day = screen.getByRole('gridcell', {
      name: target.format('D'),
    });

    await userEvent.click(day);

    await expect.element(day).toHaveAttribute('aria-selected', 'true');
  });
});
