import * as React from 'react';

import { DesktopDateTimePicker } from '@mui/x-date-pickers';

import { useMuiXDesktopDateTimePickerAdapter } from './adapter';

import type { UseMuiXDesktopDateTimePickerAdapterProps } from './adapter';
import type { PickerValidDate, DesktopDateTimePickerProps } from '@mui/x-date-pickers';
import type { Transform } from '@piplup/rhf-core';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface MuiXDesktopDateTimePickerElementProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>
  extends
    Omit<DesktopDateTimePickerProps, 'defaultValue' | 'name' | 'value'>,
    Omit<
      UseMuiXDesktopDateTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
      | 'classes'
      | 'composeClassName'
      | 'composeHelperText'
      | 'helperText'
      | 'internalClasses'
      | 'maxDate'
      | 'minDate'
      | 'onChange'
      | 'slotProps'
      | 'transform'
    > {
  /**
   * Transformation functions for the field's input and output values.
   */
  transform?: Transform<
    DesktopDateTimePickerProps['onChange'],
    TTransformedValue,
    TFieldValues,
    TName
  >;
}

function MuiXDesktopDateTimePickerComponent<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: MuiXDesktopDateTimePickerElementProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<HTMLDivElement>,
): React.ReactElement {
  const {
    className,
    control,
    defaultValue,
    disabled,
    disableFuture,
    disableIgnoringDatePartForTimeValidation,
    disableOnError,
    disableOnIsSubmitting,
    disablePast,
    error: errorProp,
    errorParser,
    inputRef,
    maxDate,
    maxTime,
    messages,
    minDate,
    minTime,
    minutesStep,
    name,
    onChange,
    onClose,
    required,
    rules,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableTime,
    shouldDisableYear,
    shouldUnregister,
    slotProps,
    style,
    timezone,
    transform,
    ...rest
  } = props;

  const adapter = useMuiXDesktopDateTimePickerAdapter(
    {
      classes: undefined,
      className,
      composeClassName: false,
      composeHelperText: true,
      control,
      defaultValue,
      disabled,
      disableFuture,
      disableIgnoringDatePartForTimeValidation,
      disableOnError,
      disableOnIsSubmitting,
      disablePast,
      error: errorProp,
      errorParser,
      inputRef,
      maxDate,
      maxTime,
      messages,
      minDate,
      minTime,
      minutesStep,
      name,
      onChange,
      onClose,
      required,
      rules,
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableTime,
      shouldDisableYear,
      shouldUnregister,
      slotProps,
      style,
      timezone,
      transform,
    },
    ref,
  );

  return <DesktopDateTimePicker {...rest} {...adapter} />;
}

export const MuiXDesktopDateTimePickerElement = React.forwardRef(
  MuiXDesktopDateTimePickerComponent,
) as typeof MuiXDesktopDateTimePickerComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  MuiXDesktopDateTimePickerElement.displayName = 'MuiXDesktopDateTimePickerElement';
}
