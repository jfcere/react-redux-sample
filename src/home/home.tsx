import { Box, Button, ButtonTypeMap, ExtendButtonBase, Icon, Link, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { animated, config, useChain, useTrail } from 'react-spring';

import CaptainAmerica from '../assets/captain-america.png';
import Highlight from '../shared/highlight';
import './home.scss';

export const Home: React.FunctionComponent = () => {

  const AnimatedButton = animated(Button) as ExtendButtonBase<ButtonTypeMap<{}, 'button'>>;
  const AnimatedTypography = animated(Typography);

  const slideLeftRef = useRef(null);
  const slideLeftAnimation = useTrail(4, {
    config: config.stiff,
    ref: slideLeftRef,
    from: { opacity: 0, transform: 'translateX(32px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  const slideUpRef = useRef(null);
  const slideUpAnimation = useTrail(2, {
    config: config.stiff,
    ref: slideUpRef,
    from: { opacity: 0, transform: 'translateY(32px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  });

  useChain([slideLeftRef, slideUpRef], [0, 0.6]);

  return (
    <React.Fragment>
      <Box className="home" display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center">
        <Box mr={{ md: '5%' }} bgcolor="primary.light" clone={true}>
          <animated.img className="home-image" src={CaptainAmerica} alt="captain-america" style={slideLeftAnimation[0]} />
        </Box>
        <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} justifyItems="stretch">
          <AnimatedTypography variant="h5" style={slideLeftAnimation[1]}>
            <span>Welcome to my&nbsp;</span>
            <span>react-redux</span>
          </AnimatedTypography>
          <AnimatedTypography align="center" variant="h3" style={slideLeftAnimation[2]}>
            Heroes Application!
          </AnimatedTypography>
          <Box color="text.disabled" display="flex" alignSelf="stretch" justifyContent={{ xs: 'center', md: 'flex-end' }} clone={true}>
            <AnimatedTypography variant="subtitle1" style={slideLeftAnimation[3]}>
              <span>Crafted with <span className="home-heart-icon">&#10084;</span> by&nbsp;</span>
              <Highlight>jfcere</Highlight>
              <span className="mx-4">&middot;</span>
              <span>
                <span>Follow on&nbsp;</span>
                <Link
                  color="secondary"
                  href="https://github.com/jfcere/react-redux-sample"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </Link>
              </span>
            </AnimatedTypography>
          </Box>
        </Box>
      </Box>
      <Box className="mt-24" display="flex" justifyContent="center">
        <AnimatedButton
          className="mr-16"
          style={slideUpAnimation[0]}
          color="primary"
          endIcon={<Icon>keyboard_arrow_right</Icon>}
          variant="contained"
          to="/heroes"
          component={RouterLink}
        >
          Take the Tour
        </AnimatedButton>
        <AnimatedButton
          color="secondary"
          style={slideUpAnimation[1]}
          variant="outlined"
        >
          I'm Not Interested!
        </AnimatedButton>
      </Box>
    </React.Fragment>
  );
};
