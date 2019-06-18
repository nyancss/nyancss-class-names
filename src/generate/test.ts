import generate from '.'

describe('generate', () => {
  it('generates simple class names', () => {
    const { Component } = generate({
      Component: {
        componentName: 'Component',
        tag: undefined,
        className: 'component-class',
        props: {}
      }
    })
    expect(Component()).toEqual('component-class')
  })

  it('generates class names that return empty string if the component has no className', () => {
    const { Component } = generate({
      Component: {
        componentName: 'Component',
        tag: undefined,
        className: undefined,
        props: {}
      }
    })
    expect(Component()).toEqual('')
  })

  it('generates class names with bool props', () => {
    const { Component } = generate({
      Component: {
        componentName: 'Component',
        tag: undefined,
        className: 'component-class',
        props: {
          disabled: {
            type: 'boolean',
            propName: 'disabled',
            className: 'component-disabled'
          }
        }
      }
    })
    expect(Component()).toEqual('component-class')
    expect(Component({ disabled: true })).toEqual(
      'component-class component-disabled'
    )
  })

  it('generates class names with enum props', () => {
    const { Component } = generate({
      Component: {
        componentName: 'Component',
        tag: undefined,
        className: 'component-class',
        props: {
          color: {
            type: 'enum',
            propName: 'color',
            values: ['red', 'green'],
            classNames: {
              red: 'component-red',
              green: 'component-green'
            }
          }
        }
      }
    })
    expect(Component()).toEqual('component-class')
    expect(Component({ color: 'red' })).toEqual('component-class component-red')
  })

  it('generates class names with enum props that accept boolean value', () => {
    const { Component } = generate({
      Component: {
        componentName: 'Component',
        tag: undefined,
        className: 'component-class',
        props: {
          padded: {
            type: 'enum',
            propName: 'padded',
            values: ['small', 'large', true],
            classNames: {
              small: 'component-padded-small',
              large: 'component-padded-large',
              true: 'component-padded'
            }
          }
        }
      }
    })
    expect(Component({ padded: true })).toEqual(
      'component-class component-padded'
    )
  })
})
