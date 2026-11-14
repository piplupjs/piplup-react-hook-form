import * as React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormContainer } from '@piplup/rhf-core';
import dayjs from 'dayjs';
import { describe, expect, test } from 'vitest';
import { mouse } from 'vitest-browser-commands/playwright';
import { render } from 'vitest-browser-react';

import { MuiXTimeClockElement } from './element';

describe('MuiXTimeClockElement', () => {
  test('renders default time from defaultValues', async () => {
    const target = dayjs('2021-02-14T08:30');

    const screen = await render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormContainer defaultValues={{ time: target }}>
          <MuiXTimeClockElement name="time" />
        </FormContainer>
      </LocalizationProvider>,
    );

    const hour = screen.getByRole('option', {
      name: target.format('h'),
    });
    await expect.element(hour).toBeInTheDocument();
    const hourRect = hour.element().getBoundingClientRect();
    mouse.click(hourRect.left + hourRect.width / 2, hourRect.top + hourRect.width / 2);

    await expect.element(hour).toHaveAttribute('aria-selected', 'true');
  });
});
