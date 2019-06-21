export default function join(...classNames: string[]) {
  return classNames.filter(s => s.length).join(' ')
}
