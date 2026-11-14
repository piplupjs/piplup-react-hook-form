import type * as React from 'react';

import { useMuiXDateTimePickerAdapter } from '../date-time-picker';

import type { UseMuiXDateTimePickerAdapterProps } from '../date-time-picker';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXMobileDateTimePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseMuiXDateTimePickerAdapterProps<TTransformedValue, TFieldValues, TName> {}

export function useMuiXMobileDateTimePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXMobileDateTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  return useMuiXDateTimePickerAdapter(props, ref);
}
