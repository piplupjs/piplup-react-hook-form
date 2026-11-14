import type * as React from 'react';

import { useUnstableBaseDatePickerAdapter as useBaseDatePickerAdapter } from '../internals';

import type { UseBaseDatePickerAdapterProps } from '../internals';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXStaticDatePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
  UseBaseDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  'helperText' | 'onBlur' | 'title'
> {}

export function useMuiXStaticDatePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXStaticDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const adapter = useBaseDatePickerAdapter(
    {
      ...props,
      helperText: undefined,
      onBlur: undefined,
    },
    ref,
  );

  return adapter;
}
