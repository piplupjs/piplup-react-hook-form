import * as React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { FormContainer } from '../form';

import { useControllerAdapter } from './use-controller-adapter';

import type { UseControllerAdapterProps } from './use-controller-adapter';
import type { FieldPath, FieldValues } from 'react-hook-form';

function TestInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: UseControllerAdapterProps<string, TFieldValues, TName>) {
  const adapter = useControllerAdapter<string, TFieldValues, TName>(props);
  const { className, disabled, name, onBlur, onChange, ref, required, style, title, value } =
    adapter;

  return (
    <input
      className={className}
      data-cy="field"
      disabled={disabled}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref as any}
      required={required}
      style={style}
      title={title}
      value={value ?? ''}
    />
  );
}

describe('useControllerAdapter (integration)', () => {
  it('binds to the form and submits value', async () => {
    const onSubmit = vi.fn();

    const { container } = render(
      <FormContainer onSubmit={(d) => onSubmit(d)}>
        <TestInput name="first" />
        <button type="submit">Submit</button>
      </FormContainer>,
    );

    const field = container.querySelector('[data-cy=field]') as HTMLInputElement;
    await userEvent.type(field, 'Alice');
    await userEvent.click(container.querySelector('button[type=submit]') as HTMLButtonElement);

    expect(onSubmit).toHaveBeenCalledWith({ first: 'Alice' });
  });

  it('reports validation errors via onError when rules fail', async () => {
    const onSubmit = vi.fn();
    const onError = vi.fn();

    const { container } = render(
      <FormContainer onError={(error) => onError(error)} onSubmit={(d) => onSubmit(d)}>
        <TestInput name="requiredField" rules={{ required: true }} />
        <button type="submit">Submit</button>
      </FormContainer>,
    );

    await userEvent.click(container.querySelector('button[type=submit]') as HTMLButtonElement);

    expect(onSubmit).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalled();
    const err = onError.mock.calls[0][0];
    expect(err).toHaveProperty('requiredField');
    expect(err.requiredField).toHaveProperty('type', 'required');
  });
});
