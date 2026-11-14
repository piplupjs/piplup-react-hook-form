import * as React from 'react';

import { Button } from '@mui/material';

import { useMuiButtonAdapter } from './adapter';

import type { UseMuiButtonAdapterProps } from './adapter';
import type { ButtonProps } from '@mui/material';
import type { FieldValues } from 'react-hook-form';

export interface MuiButtonElementProps<TFieldValues extends FieldValues = FieldValues>
  extends
    Omit<ButtonProps, 'name' | 'style' | 'type'>,
    Omit<
      UseMuiButtonAdapterProps<TFieldValues>,
      | 'classes'
      | 'composeClassName'
      | 'composeHelperText'
      | 'errorParser'
      | 'helperText'
      | 'onClick'
    > {}

function MuiButtonComponent<TFieldValues extends FieldValues = FieldValues>(
  props: MuiButtonElementProps<TFieldValues>,
  ref?: ButtonProps['ref'],
) {
  const {
    classes,
    className,
    control,
    disabled,
    disableOnError,
    disableOnIsSubmitting,
    error,
    exact,
    name,
    onClick,
    style,
    type,
    ...rest
  } = props;

  const {
    error: _error,
    helperText: _helperText,
    ...adapter
  } = useMuiButtonAdapter(
    {
      classes,
      className,
      composeClassName: false,
      composeHelperText: false,
      control,
      disabled,
      disableOnError,
      disableOnIsSubmitting,
      error,
      exact,
      name,
      onClick,
      style,
      type,
    },
    ref,
  );

  return <Button {...rest} {...adapter} />;
}

export const MuiButtonElement = React.forwardRef(
  MuiButtonComponent,
) as typeof MuiButtonComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  MuiButtonElement.displayName = 'MuiButtonElement';
}
