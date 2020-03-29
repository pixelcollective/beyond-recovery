import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { composedHelpers } from './box';

export const MotionBox = styled(motion.div)`
  ${composedHelpers}
`;

MotionBox.defaultProps = {};
