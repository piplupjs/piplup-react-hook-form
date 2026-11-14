import { useNumberFormatBaseAdapter } from '../number-format-base/adapter';

import type { UseNumberFormatBaseAdapterProps } from '../number-format-base/adapter';
import type { FieldPath, FieldValues } from 'react-hook-form';

export interface UseNumericFormatAdapterProps<
  TTransformedValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends UseNumberFormatBaseAdapterProps<TTransformedValue, TFieldValues, TName> {}

export function useNumericFormatAdapter<
  TTransformedValue,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: UseNumberFormatBaseAdapterProps<TTransformedValue, TFieldValues, TName>) {
  return useNumberFormatBaseAdapter(props);
}
