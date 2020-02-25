import { Box, Button, Checkbox, Divider, Icon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React from 'react';

import { Hero } from '../models';

interface Props {
  heroes: Hero[];
  selectedHero?: Hero;
  onSelectClick: (hero: Hero) => void;
  onAddClick: () => void;
  onEditClick: () => void;
  onRemoveClick: (hero: Hero) => void;
}

const HeroList: React.FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <Box className="py-8 pr-8" display="flex" alignItems="center">
        <Button
          className="mr-16"
          color="secondary"
          startIcon={<Icon>add</Icon>}
          onClick={props.onAddClick}
        >
          Add
        </Button>
        <Button
          className="mr-16"
          color="secondary"
          startIcon={<Icon>edit</Icon>}
          onClick={props.onEditClick}
          disabled={props.selectedHero == null}
        >
          Edit
        </Button>
        <Button
          className="mr-16"
          color="secondary"
          startIcon={<Icon>delete</Icon>}
          onClick={() => props.selectedHero && props.onRemoveClick(props.selectedHero)}
          disabled={props.selectedHero == null}
        >
          Remove
        </Button>
        <Box flexGrow={1} />
        <IconButton edge="end">
          <Icon>search</Icon>
        </IconButton>
      </Box>
      <Divider />
      <List className="py-16">
        {props.heroes && props.heroes.map(hero => {
          return (
            <ListItem
              key={hero.id}
              button={true}
              onClick={() => props.onSelectClick(hero)}
            >
              <ListItemText id={hero.id.toString()} primary={hero.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={() => props.onSelectClick(hero)}
                  checked={props.selectedHero === hero}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default HeroList;
