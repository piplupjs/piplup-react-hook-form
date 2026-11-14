import type * as React from 'react';

import { execSequentially } from '@piplup/utils';

import {
  useUnstableBaseTimePickerAdapter as useBaseTimePickerAdapter,
  useUnstableComposePickerSlotProps as useComposePickerSlotProps,
} from '../internals';

import type { UseBaseTimePickerAdapterProps } from '../internals';
import type { PickerValidDate } from '@mui/x-date-pickers';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseMuiXTimePickerAdapterProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<
  UseBaseTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  'helperText' | 'onBlur'
> {
  inputRef?: React.Ref<HTMLInputElement>;
  onClose?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  slotProps?: Record<string, any>;
}

export function useMuiXTimePickerAdapter<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiXTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const { inputRef, onClose, slotProps } = props;

  const { error, helperText, onBlur, ...adapter } = useBaseTimePickerAdapter(
    {
      ...props,
      helperText: undefined,
    },
    inputRef,
  );

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
