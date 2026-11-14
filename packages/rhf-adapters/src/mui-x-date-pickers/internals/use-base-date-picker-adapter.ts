import type * as React from 'react';

import { validateDate, usePickerAdapter } from '@mui/x-date-pickers';
import { applyDefaultDate, useDefaultDates } from '@mui/x-date-pickers/internals';

import { useUnstableBasePickerAdapter as useBasePickerAdapter } from '../internals';

import type { UseBasePickerAdapterProps } from '../internals';
import type { DateValidationError, ValidateDateProps } from '@mui/x-date-pickers';
import type { PickerValidValue } from '@mui/x-date-pickers/internals';
import type { FieldPath, FieldValues } from 'react-hook-form';

type ValidationProps = Omit<
  ValidateDateProps,
  'disableFuture' | 'disablePast' | 'maxDate' | 'minDate'
> &
  Partial<Pick<ValidateDateProps, 'disableFuture' | 'disablePast' | 'maxDate' | 'minDate'>>;

export interface UseBaseDatePickerAdapterProps<
  TTransformedValue extends PickerValidValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>
  extends
    ValidationProps,
    Omit<
      UseBasePickerAdapterProps<
        TTransformedValue,
        DateValidationError,
        ValidationProps,
        TFieldValues,
        TName
      >,
      'validationProps' | 'validator'
    > {}

export function useUnstableBaseDatePickerAdapter<
  TTransformedValue extends PickerValidValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseBaseDatePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const {
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
  } = props;

  const pickerAdapter = usePickerAdapter();
  const defaultDates = useDefaultDates();

  const adapter = useBasePickerAdapter(
    {
      ...props,
      validationProps: {
        disableFuture: disableFuture ?? false,
        disablePast: disablePast ?? false,
        maxDate: applyDefaultDate(pickerAdapter, maxDate, defaultDates.maxDate),
        minDate: applyDefaultDate(pickerAdapter, minDate, defaultDates.minDate),
        shouldDisableDate,
        shouldDisableMonth,
        shouldDisableYear,
      },
      validator: validateDate,
    },
    ref,
  );

  return adapter;
}
