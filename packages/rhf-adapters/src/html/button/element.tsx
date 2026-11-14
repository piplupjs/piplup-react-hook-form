import * as React from 'react';

import { useHtmlButtonAdapter } from './adapter';

import type { UseHtmlButtonAdapterProps } from './adapter';
import type { FieldValues } from 'react-hook-form';

export interface HtmlButtonElementProps<TFieldValues extends FieldValues = FieldValues>
  extends
    Omit<React.ComponentProps<'button'>, 'name' | 'style'>,
    Omit<
      UseHtmlButtonAdapterProps<TFieldValues>,
      'composeClassName' | 'composeHelperText' | 'helperText' | 'internalClasses' | 'onClick'
    > {}

function HtmlButtonComponent<TFieldValues extends FieldValues = FieldValues>(
  props: HtmlButtonElementProps<TFieldValues>,
  ref?: React.Ref<HTMLButtonElement>,
): React.ReactElement {
  const {
    classes,
    className,
    control,
    disabled,
    disableOnError,
    disableOnIsSubmitting,
    error,
    errorParser,
    exact,
    name,
    onClick,
    style,
    type,
    ...rest
  } = props;

  const {
    error: _error,
    helperText: _helperText,
    ...adapter
  } = useHtmlButtonAdapter<TFieldValues, HTMLButtonElement>(
    {
      classes,
      className,
      composeClassName: true,
      composeHelperText: false,
      control,
      disabled,
      disableOnError,
      disableOnIsSubmitting,
      error,
      errorParser,
      exact,
      helperText: undefined,
      name,
      onClick,
      style,
      type,
    },
    ref,
  );

  // eslint-disable-next-line react/button-has-type -- the type comes from the props
  return <button {...rest} {...adapter} />;
}

export const HtmlButtonElement = React.forwardRef(
  HtmlButtonComponent,
) as typeof HtmlButtonComponent & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  HtmlButtonElement.displayName = 'HtmlButtonElement';
}
