import type * as React from 'react';

import { useMuiXDatePickerAdapter } from '../date-picker';

import type { UseMuiXDatePickerAdapterProps } from '../date-picker';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXMobileDatePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseMuiXDatePickerAdapterProps<TTransformedValue, TFieldValues, TName> {}

export function useMuiXMobileDatePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXMobileDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  return useMuiXDatePickerAdapter(props, ref);
}
