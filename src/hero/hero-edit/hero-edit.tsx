import {
  Box,
  Button,
  createStyles,
  FormControl,
  FormHelperText,
  Icon,
  InputLabel,
  makeStyles,
  MenuItem,
  Theme,
  Typography,
} from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import React from 'react';
import * as Yup from 'yup';

import { Hero, Power } from '../models';

interface Props {
  hero?: Hero;
  powers: Power[];
  onCancelClick: () => void;
  onSaveClick: (hero: Hero) => void;
}

const useStyles = makeStyles(({ spacing }: Theme) => {
  return createStyles({
    root: {
      '& .MuiFormControl-root': {
        marginBottom: spacing(2),
      },
    },
  });
});

const HeroEdit: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const formSchema = Yup.object().shape<Hero>({
    id: Yup
      .number(),
    name: Yup
      .string()
      .required('This field is required'),
    powerId: Yup
      .number()
      .required('This field is required'),
    quote: Yup
      .string(),
  });

  const initialValues: Hero = {
    id: -1,
    name: '',
    powerId: '' as any,
    quote: '',
  };

  return (
    <Formik
      initialValues={props.hero || initialValues}
      validationSchema={formSchema}
      onSubmit={props.onSaveClick}
    >
      {({ errors }) => (
        <Form className={classes.root}>
          <Typography className="pt-16 pb-24" variant="subtitle1">
            {!props.hero ? 'Create' : 'Edit'} Hero
          </Typography>
          <Box display="flex" flexDirection="column">
            <TextField
              name="name"
              label="Hero Name"
              placeholder="Enter Hero's Name..."
              variant="filled"
            />
            <FormControl variant="filled" error={!!errors.powerId}>
              <InputLabel id="power-label">Superpower</InputLabel>
              <Select labelId="power-label" name="powerId">
                {props.powers.map(power => (<MenuItem key={power.id} value={power.id}>{power.name}</MenuItem>))}
              </Select>
              {!!errors.powerId ? <FormHelperText>{errors.powerId}</FormHelperText> : null}
            </FormControl>
            <TextField
              id="quote"
              label="Favorite Quote"
              multiline={true}
              name="quote"
              placeholder="Favorite Hero quote..."
              rows="4"
              variant="filled"
            />
            <Box className="py-16">
              <Button className="mr-16" startIcon={<Icon>close</Icon>} onClick={props.onCancelClick}>
                Cancel
              </Button>
              <Button className="mr-16" color="secondary" startIcon={<Icon>check</Icon>} type="submit">
                {!props.hero ? 'Save' : 'Update'}
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default HeroEdit;
