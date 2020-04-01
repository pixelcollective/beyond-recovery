import styled from '@emotion/styled'

import {
  background,
  border,
  bottom,
  boxShadow,
  color,
  compose,
  layout,
  left,
  position,
  right,
  space,
  top,
  typography,
} from 'styled-system'

export const composedHelpers = compose(
  background,
  layout,
  border,
  space,
  color,
  typography,
  top,
  bottom,
  left,
  right,
  position,
  boxShadow,
)

export const Box = styled.div`
  ${composedHelpers}
`

Box.defaultProps = {}
