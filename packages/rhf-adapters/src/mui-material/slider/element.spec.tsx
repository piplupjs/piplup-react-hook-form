import * as React from 'react';

import { FormContainer } from '@piplup/rhf-core';
import { describe, test, expect, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';

import { MuiSliderElement } from './element';

describe('MuiSliderElement', () => {
  test('mounts and allows keyboard changes', async () => {
    const screen = await render(
      <FormContainer defaultValues={{ volume: 20 }}>
        <MuiSliderElement name="volume" />
      </FormContainer>,
    );

    const slider = screen.getByRole('slider');

    const element = await slider.element();
    await element.focus();

    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await expect.element(slider).toHaveAttribute('aria-valuenow', '22');
  });

  test('honors defaultValue from form', async () => {
    const screen = await render(
      <FormContainer defaultValues={{ volume: 30 }}>
        <MuiSliderElement name="volume" />
      </FormContainer>,
    );

    const slider = screen.getByRole('slider');
    await expect.element(slider).toHaveAttribute('aria-valuenow', '30');
  });

  test('fires onChange when changed via keyboard', async () => {
    const onChange = vi.fn();

    const screen = await render(
      <FormContainer>
        <MuiSliderElement name="volume" onChange={(event) => onChange(event)} />
      </FormContainer>,
    );

    const slider = screen.getByRole('slider');

    const element = await slider.element();
    await element.focus();

    await userEvent.keyboard('{ArrowRight}');
    await expect(onChange).toHaveBeenCalled();
  });

  test('respects disabled prop', async () => {
    const screen = await render(
      <FormContainer>
        <MuiSliderElement name="volume" disabled />
      </FormContainer>,
    );

    const slider = screen.getByRole('slider');
    await expect.element(slider).toBeDisabled();
  });
});
