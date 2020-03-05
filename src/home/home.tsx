import { Box, Button, Icon, Link, Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import CaptainAmerica from '../assets/captain-america.png';
import Highlight from '../shared/highlight';
import './home.scss';

export const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Box className="home" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Box mr={'5%'} bgcolor="primary.light" clone={true}>
          <img className="home-image" src={CaptainAmerica} alt="captain-america" />
        </Box>
        <div>
          <Typography variant="h5">
            <span>Welcome to my&nbsp;</span>
            <span>react-redux</span>
          </Typography>
          <Typography variant="h3">
            Heroes Application!
          </Typography>
          <Typography variant="subtitle1">
            <Box color="text.disabled" display="flex" justifyContent="flex-end">
              <span>Crafted with <span className="home-heart-icon">&#10084;</span> by&nbsp;</span>
              <Highlight>jfcere</Highlight>
              <span className="mx-4">&middot;</span>
              <span>
                <span>Follow on&nbsp;</span>
                <Link href="https://github.com/jfcere/react-redux-sample" target="_blank" rel="noopener noreferrer">Github</Link>
              </span>
            </Box>
          </Typography>
        </div>
      </Box>
      <Box className="mt-24" display="flex" justifyContent="center">
        <Button
          className="mr-16"
          color="primary"
          endIcon={<Icon>keyboard_arrow_right</Icon>}
          variant="contained"
          component={RouterLink}
          to="/heroes"
        >
          Take the Tour
        </Button>
        <Button color="secondary" variant="outlined">
          I'm Not Interested!
        </Button>
      </Box>
    </React.Fragment>
  );
};
