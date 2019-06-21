import join from '.'

describe('join', () => {
  it('joins passed classes', () => {
    expect(join('xxx yyy', 'zzz')).toEqual('xxx yyy zzz')
  })

  it('filters empty classes', () => {
    expect(join('xxx', '', 'yyy')).toEqual('xxx yyy')
  })

  it('returns empty string if there are no arguments', () => {
    expect(join()).toEqual('')
  })
})
