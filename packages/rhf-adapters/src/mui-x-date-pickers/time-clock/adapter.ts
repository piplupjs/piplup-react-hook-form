import type * as React from 'react';

import { useUnstableBaseTimePickerAdapter as useBaseTimePickerAdapter } from '../internals';

import type { UseBaseTimePickerAdapterProps } from '../internals';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXTimeClockAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
  UseBaseTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  'onBlur' | 'validator'
> {}

export function useMuiXTimeClockAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXTimeClockAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const adapter = useBaseTimePickerAdapter(
    {
      ...props,
      onBlur: undefined,
    },
    ref,
  );

  return adapter;
}
