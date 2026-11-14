import * as React from 'react';

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { useUnstableTransform as useTransform } from './use-transform';

import type { UseTransformProps } from './use-transform';
import type { FieldPath, FieldValues } from 'react-hook-form';

function Comp<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: UseTransformProps<string, TFieldValues, TName>) {
  const t = useTransform(props);
  return (
    <div>
      <div data-cy="val">{String(t.value)}</div>
      <button data-cy="call" onClick={() => t.onChange('x')}>
        call
      </button>
    </div>
  );
}

describe('useTransform', () => {
  it('applies input transform to value', () => {
    const { container } = render(
      <Comp onChange={() => {}} transform={{ input: (v) => String(v + 1) }} value={1} />,
    );
    expect(container.querySelector('[data-cy=val]')?.textContent).toContain('2');
  });
});
