import type * as React from 'react';

import { useHtmlInputAdapter } from '../../html/input/adapter';

import type { UseHtmlInputAdapterProps } from '../../html/input/adapter';
import type { FieldPath, FieldValues } from 'react-hook-form';

export type UseMuiInputBaseAdapterProps<
  TTransformedValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseHtmlInputAdapterProps<TTransformedValue, TFieldValues, TName>;

export function useMuiInputBaseAdapter<
  TTransformedValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  RefType = unknown,
>(
  props: UseMuiInputBaseAdapterProps<TTransformedValue, TFieldValues, TName>,
  ref?: React.Ref<RefType>,
) {
  const adapter = useHtmlInputAdapter<TTransformedValue, TFieldValues, TName, RefType>(props, ref);
  return {
    ...adapter,
    classes: props.classes,
  };
}
