import type * as React from 'react';

import { useMuiXTimePickerAdapter } from '../time-picker';

import type { UseMuiXTimePickerAdapterProps } from '../time-picker';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXMobileTimePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseMuiXTimePickerAdapterProps<TTransformedValue, TFieldValues, TName> {}

export function useMuiXMobileTimePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXMobileTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  return useMuiXTimePickerAdapter(props, ref);
}
