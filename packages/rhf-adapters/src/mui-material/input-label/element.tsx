import * as React from 'react';

import { InputLabel } from '@mui/material';

import { useMuiInputLabelAdapter } from './adapter';

import type { UseMuiInputLabelAdapterProps } from './adapter';
import type { InputLabelProps } from '@mui/material';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface MuiInputLabelElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>
  extends
    Omit<InputLabelProps, 'name' | 'style'>,
    Omit<
      UseMuiInputLabelAdapterProps<TFieldValues, TName>,
      | 'classes'
      | 'composeClassName'
      | 'composeHelperText'
      | 'errorParser'
      | 'helperText'
      | 'helperText'
    > {}

function MuiInputLabelComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: MuiInputLabelElementProps<TFieldValues, TName>,
  ref?: InputLabelProps['ref'],
): React.ReactElement {
  const {
    classes,
    className,
    control,
    disabled,
    disableOnError,
    disableOnIsSubmitting,
    error,
    name,
    style,
    ...rest
  } = props;

  const { helperText: _helperText, ...adapter } = useMuiInputLabelAdapter(
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
      name,
      style,
    },
    ref,
  );

  return <InputLabel {...rest} {...adapter} />;
}

export const MuiInputLabelElement = React.forwardRef(
  MuiInputLabelComponent,
) as typeof MuiInputLabelComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  MuiInputLabelElement.displayName = 'MuiInputLabelElement';
}
