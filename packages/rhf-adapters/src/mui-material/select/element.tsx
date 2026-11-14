import * as React from 'react';

import { Select } from '@mui/material';

import { useMuiSelectAdapter } from './adapter';

import type { UseMuiSelectAdapterProps } from './adapter';
import type { SelectProps } from '@mui/material';
import type { Transform } from '@piplup/rhf-core';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface MuiSelectElementProps<
  TTransformedValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>
  extends
    Omit<SelectProps, 'defaultValue' | 'name' | 'style'>,
    Omit<
      UseMuiSelectAdapterProps<TTransformedValue, TFieldValues, TName>,
      | 'classes'
      | 'composeClassName'
      | 'composeHelperText'
      | 'composeHelperText'
      | 'errorParser'
      | 'helperText'
      | 'onBlur'
      | 'onChange'
      | 'transform'
    > {
  /**
   * Transformation functions for the field's input and output values.
   */
  transform?: Transform<SelectProps['onChange'], TTransformedValue, TFieldValues, TName>;
}

function MuiSelectComponent<
  TTransformedValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: MuiSelectElementProps<TTransformedValue, TFieldValues, TName>, ref?: SelectProps['ref']) {
  const {
    classes,
    className,
    control,
    defaultValue,
    disabled,
    disableOnError,
    disableOnIsSubmitting,
    error,
    max,
    maxLength,
    messages,
    min,
    minLength,
    multiple,
    name,
    onBlur,
    onChange,
    pattern,
    required,
    rules,
    shouldUnregister,
    style,
    title,
    transform,
    ...rest
  } = props;

  const { helperText: _helperText, ...adapter } = useMuiSelectAdapter(
    {
      classes,
      className,
      composeClassName: false,
      composeHelperText: false,
      control,
      defaultValue,
      disabled,
      disableOnError,
      disableOnIsSubmitting,
      error,
      max,
      maxLength,
      messages,
      min,
      minLength,
      multiple,
      name,
      onBlur,
      onChange,
      pattern,
      required,
      rules,
      shouldUnregister,
      style,
      title,
      transform,
    },
    ref,
  );

  return <Select {...rest} {...adapter} />;
}

export const MuiSelectElement = React.forwardRef(
  MuiSelectComponent,
) as typeof MuiSelectComponent & {
  displayName?: string;
};

if (process.env.NODE_ENV !== 'production') {
  MuiSelectElement.displayName = 'MuiSelectElement';
}
