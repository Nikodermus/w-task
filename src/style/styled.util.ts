import Case from "case";

type VariableMutation = (value: [string, number | string]) => string;

const forVariables = (
  obj: Record<string, string | number>,
  fn: VariableMutation
) => Object.entries(obj).map(fn).join("\n");

export const createSizeVariables = (
  sizes: Record<string, number>,
  varName: string
): string =>
  forVariables(
    sizes,
    ([name, percentage]) =>
      `--${varName}-${Case.kebab(name)}: ${percentage}rem;`
  );

export const createPlainVariables = (
  variables: Record<string, string | number>,
  varName: string
): string =>
  forVariables(
    variables,
    ([name, value]) => `--${varName}-${Case.kebab(name)}: ${value};`
  );

export const toREM = (size: number): string =>
  `calc(${size} / var(--font-size-px) * 1rem)`;
