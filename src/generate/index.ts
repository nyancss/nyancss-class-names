import { NyanCSSMap } from '@nyancss/types'
import { getClassName } from '@nyancss/utils/stringify'
import { NyanCSSClassNamesExports, NyanCSSClassNamesProps } from '../types'

export default function generate(map: NyanCSSMap) {
  return Object.keys(map).reduce(
    (acc, componentName) => {
      acc[componentName] = (props: NyanCSSClassNamesProps = {}) =>
        getClassName(map[componentName], props)
      return acc
    },
    {} as NyanCSSClassNamesExports
  )
}
