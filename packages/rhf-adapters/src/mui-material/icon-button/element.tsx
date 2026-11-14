import * as React from 'react';

import { IconButton } from '@mui/material';

import { useMuiIconButtonAdapter } from './adapter';

import type { UseMuiIconButtonAdapterProps } from './adapter';
import type { IconButtonProps } from '@mui/material';
import type { FieldValues } from 'react-hook-form';

export interface MuiIconButtonElementProps<TFieldValues extends FieldValues = FieldValues>
  extends
    Omit<IconButtonProps, 'name' | 'style' | 'type'>,
    Omit<
      UseMuiIconButtonAdapterProps<TFieldValues>,
      | 'classes'
      | 'composeClassName'
      | 'composeHelperText'
      | 'errorParser'
      | 'helperText'
      | 'onClick'
    > {}

function MuiIconButtonComponent<TFieldValues extends FieldValues = FieldValues>(
  props: MuiIconButtonElementProps<TFieldValues>,
  ref?: IconButtonProps['ref'],
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
  } = useMuiIconButtonAdapter(
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

  return <IconButton {...rest} {...adapter} />;
}

export const MuiIconButtonElement = React.forwardRef(
  MuiIconButtonComponent,
) as typeof MuiIconButtonComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  MuiIconButtonElement.displayName = 'MuiIconButtonElement';
}
