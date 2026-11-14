import type * as React from 'react';

import { execSequentially } from '@piplup/utils';

import {
  useUnstableComposePickerSlotProps as useComposePickerSlotProps,
  useUnstableBaseDatePickerAdapter as useBaseDatePickerAdapter,
} from '../internals';

import type { UseBaseDatePickerAdapterProps } from '../internals';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXDatePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
  UseBaseDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  'helperText' | 'onBlur' | 'title' | 'validationProps' | 'validator'
> {
  inputRef?: React.Ref<HTMLInputElement>;
  onClose?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slotProps?: Record<string, any>;
}

export function useMuiXDatePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const { inputRef, onClose, slotProps } = props;

  const { error, helperText, onBlur, ...adapter } = useBaseDatePickerAdapter(props, inputRef);

  const composedSlotProps = useComposePickerSlotProps({
    error,
    helperText,
    onBlur,
    slotProps,
  });

  return {
    ...adapter,
    inputRef: adapter.ref,
    onClose: execSequentially(onBlur, onClose),
    ref,
    slotProps: composedSlotProps,
  };
}
