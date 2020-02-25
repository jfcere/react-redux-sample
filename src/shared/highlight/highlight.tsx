import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ palette }: Theme) => createStyles({
  root: {
    borderRadius: '16px',
    fontWeight: 500,
    margin: '0 2px',
    padding: '0 8px',
    backgroundColor: palette.primary.light,
    color: palette.getContrastText(palette.primary.light),
  },
}));

const Highlight: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="span" color="text.primary" bgcolor="primary.light">
      {children}
    </Box>
  );
};

export default Highlight;
