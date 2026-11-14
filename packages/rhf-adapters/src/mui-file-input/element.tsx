import * as React from 'react';

import { MuiFileInput } from 'mui-file-input';

import { useMuiFileInputAdapter } from './adapter';

import type { UseMuiFileInputAdapterProps, MuiFileInputValue } from './adapter';
import type { Transform } from '@piplup/rhf-core';
import type { MuiFileInputProps } from 'mui-file-input';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type MuiFileInputElementProps<
  Multiple extends boolean | undefined = undefined,
  TTransformedValue extends MuiFileInputValue<Multiple> = MuiFileInputValue<Multiple>,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  MuiFileInputProps,
  'checked' | 'defaultChecked' | 'defaultValue' | 'name' | 'style' | 'value'
> &
  Omit<
    UseMuiFileInputAdapterProps<Multiple, TTransformedValue, TFieldValues, TName>,
    'composeHelperText' | 'onBlur' | 'onChange' | 'transform'
  > & {
    /**
     * Transformation functions for the field's input and output values.
     */
    transform?: Transform<MuiFileInputProps['onChange'], TTransformedValue, TFieldValues, TName>;
  };

function MuiFileInputComponent<
  Multiple extends boolean | undefined = undefined,
  TTransformedValue extends MuiFileInputValue<Multiple> = MuiFileInputValue<Multiple>,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: MuiFileInputElementProps<Multiple, TTransformedValue, TFieldValues, TName>,
  ref?: MuiFileInputProps['ref'],
): React.ReactElement {
  const {
    className,
    control,
    defaultValue,
    disabled,
    disableOnError,
    disableOnIsSubmitting,
    error,
    errorParser,
    helperText,
    inputRef,
    messages,
    multiple,
    name,
    onBlur,
    onChange,
    required,
    rules,
    shouldUnregister,
    style,
    transform,
    ...rest
  } = props;

  const adapter = useMuiFileInputAdapter(
    {
      className,
      composeHelperText: true,
      control,
      defaultValue,
      disabled,
      disableOnError,
      disableOnIsSubmitting,
      error,
      errorParser,
      helperText,
      inputRef,
      messages,
      multiple,
      name,
      onBlur,
      onChange,
      required,
      rules,
      shouldUnregister,
      style,
      transform,
    },
    ref,
  );

  const inputProps = { ...rest, ...adapter } as MuiFileInputProps;

  return <MuiFileInput {...inputProps} />;
}

export const MuiFileInputElement = React.forwardRef(
  MuiFileInputComponent,
) as typeof MuiFileInputComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  MuiFileInputElement.displayName = 'MuiFileInputElement';
}
