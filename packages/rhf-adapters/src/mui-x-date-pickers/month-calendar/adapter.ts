import type * as React from 'react';

import { useUnstableBaseDatePickerAdapter as useBaseDatePickerAdapter } from '../internals';

import type { UseBaseDatePickerAdapterProps } from '../internals';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXMonthCalendarAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<UseBaseDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>, 'title'> {}

export function useMuiXMonthCalendarAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXMonthCalendarAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const adapter = useBaseDatePickerAdapter(props, ref);

  return adapter;
}
