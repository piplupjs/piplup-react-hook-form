import type * as React from 'react';

import { useMuiXDateTimePickerAdapter } from '../date-time-picker';

import type { UseMuiXDateTimePickerAdapterProps } from '../date-time-picker';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXDesktopDateTimePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseMuiXDateTimePickerAdapterProps<TTransformedValue, TFieldValues, TName> {}

export function useMuiXDesktopDateTimePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXDesktopDateTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  return useMuiXDateTimePickerAdapter(props, ref);
}
