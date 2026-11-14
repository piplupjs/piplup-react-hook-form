import * as React from 'react';

import { MobileTimePicker } from '@mui/x-date-pickers';

import { useMuiXMobileTimePickerAdapter } from './adapter';

import type { UseMuiXMobileTimePickerAdapterProps } from './adapter';
import type { TimeView, MobileTimePickerProps, PickerValidDate } from '@mui/x-date-pickers';
import type { Transform } from '@piplup/rhf-core';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type MuiXMobileTimePickerElementProps<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<MobileTimePickerProps<TimeView>, 'defaultValue' | 'name' | 'value'> &
  Omit<
    UseMuiXMobileTimePickerAdapterProps<TTransformedValue, TFieldValues, TName>,
    | 'classes'
    | 'composeClassName'
    | 'composeHelperText'
    | 'helperText'
    | 'internalClasses'
    | 'onChange'
    | 'slotProps'
    | 'transform'
  > & {
    /**
     * Transformation functions for the field's input and output values.
     */
    transform?: Transform<
      MobileTimePickerProps<TimeView>['onChange'],
      TTransformedValue,
      TFieldValues,
      TName
    >;
  };

function MuiXMobileTimePickerComponent<
  TTransformedValue extends PickerValidDate,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: MuiXMobileTimePickerElementProps<TTransformedValue, TFieldValues, TName>,
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
    error,
    errorParser,
    inputRef,
    maxTime,
    messages,
    minTime,
    minutesStep,
    name,
    onChange,
    onClose,
    required,
    rules,
    shouldDisableTime,
    shouldUnregister,
    slotProps,
    style,
    timezone,
    transform,
    ...rest
  } = props;

  const adapter = useMuiXMobileTimePickerAdapter(
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
      error,
      errorParser,
      inputRef,
      maxTime,
      messages,
      minTime,
      minutesStep,
      name,
      onChange,
      onClose,
      required,
      rules,
      shouldDisableTime,
      shouldUnregister,
      slotProps,
      style,
      timezone,
      transform,
    },
    ref,
  );

  return <MobileTimePicker {...rest} {...adapter} />;
}

export const MuiXMobileTimePickerElement = React.forwardRef(
  MuiXMobileTimePickerComponent,
) as typeof MuiXMobileTimePickerComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  MuiXMobileTimePickerElement.displayName = 'MuiXMobileTimePickerElement';
}
