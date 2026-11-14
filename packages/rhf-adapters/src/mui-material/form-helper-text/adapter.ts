import type * as React from 'react';

import { useHtmlFormHelperTextAdapter } from '../../html/form-helper-text/adapter';

import type { UseHtmlFormHelperTextProps } from '../../html/form-helper-text/adapter';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type UseMuiFormHelperTextProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseHtmlFormHelperTextProps<TFieldValues, TName>;

export function useMuiFormHelperTextAdapter<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(props: UseHtmlFormHelperTextProps<TFieldValues, TName>, ref?: React.Ref<RefType>) {
  const adapter = useHtmlFormHelperTextAdapter<TFieldValues, TName, RefType>(props, ref);

  return {
    ...adapter,
    classes: props.classes,
  };
}
