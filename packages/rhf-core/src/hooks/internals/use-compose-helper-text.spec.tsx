import * as React from 'react';

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { FormErrorProvider } from '../../form';

import { useUnstableComposeHelperText as useComposeHelperText } from './use-compose-helper-text';

import type { UseComposeHelperTextProps } from './use-compose-helper-text';
import type { FormErrorParserFn } from '../../context';
import type { FieldValues } from 'react-hook-form';

function Comp(props: UseComposeHelperTextProps<FieldValues>) {
  const txt = useComposeHelperText(props);
  return <div data-cy="txt">{String(txt || '')}</div>;
}

describe('useComposeHelperText', () => {
  it('returns helperText when composeHelperText is false', () => {
    const { container } = render(<Comp composeHelperText={false} helperText="h" />);
    expect(container.querySelector('[data-cy=txt]')?.textContent).toContain('h');
  });

  it('uses fieldError message when available', () => {
    const { container } = render(
      <Comp fieldError={{ message: 'err', type: 'custom' }} helperText="f" composeHelperText />,
    );
    expect(container.querySelector('[data-cy=txt]')?.textContent).toContain('err');
  });

  it('honors context-provided parser', () => {
    const parser: FormErrorParserFn = (error) => `parsed:${JSON.stringify(error)}`;
    const { container } = render(
      <FormErrorProvider errorParser={parser}>
        <Comp fieldError={{ message: 'err', type: 'custom' }} composeHelperText />
      </FormErrorProvider>,
    );

    expect(container.querySelector('[data-cy=txt]')?.textContent).toContain('parsed:');
  });
});
