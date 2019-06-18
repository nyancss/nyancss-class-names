import { NyanCSSComponent, NyanCSSMap, NyanCSSProp } from '@nyancss/types'
import { NyanCSSClassNamesExports, NyanCSSClassNamesProps } from '../types'

export default function generate(map: NyanCSSMap) {
  return Object.keys(map).reduce(
    (acc, componentName) => {
      acc[componentName] = (props?: NyanCSSClassNamesProps) =>
        getClassName(map[componentName], props)
      return acc
    },
    {} as NyanCSSClassNamesExports
  )
}

function getClassName(
  component: NyanCSSComponent,
  props: NyanCSSClassNamesProps | undefined
) {
  const componentPropsClassNames =
    props &&
    Object.keys(component.props).reduce(
      (acc, componentPropName) => {
        const componentProp = component.props[componentPropName]
        const propValue = props[componentPropName]
        return acc.concat(findModifierClassName(componentProp, propValue) || [])
      },
      [] as string[]
    )
  return classesToString([component.className].concat(componentPropsClassNames))
}

function findModifierClassName(componentProp: NyanCSSProp, propValue: any) {
  switch (componentProp.type) {
    case 'boolean':
      if (propValue) return componentProp.className
      break
    case 'enum':
      return componentProp.classNames[propValue]
  }
}

function classesToString(classes: Array<string | undefined>) {
  return classes
    .filter(c => !!c)
    .sort()
    .join(' ')
}
