export type NyanCSSClassNamesProps = { [key: string]: boolean | string }

export type NyanCSSClassNames = (props?: NyanCSSClassNamesProps) => string

export type NyanCSSClassNamesExports = {
  [componentName: string]: NyanCSSClassNames
}
