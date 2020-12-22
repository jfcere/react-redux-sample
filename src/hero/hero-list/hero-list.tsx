import { Box, Button, Checkbox, Divider, Icon, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React from 'react';

import SpiderMan from '../../assets/spiderman.png';
import { Hero } from '../models';
import './hero-list.scss';

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
      {props.heroes && props.heroes.length === 0 && (
        <Box className="hero-list-empty">
          <Box bgcolor="primary.light" clone={true}>
            <img className="hero-list-empty__image" src={SpiderMan} alt="spider-man" />
          </Box>
          <Box className="hero-list-empty__text" color="text.disabled">
            <Icon className="hero-list-empty__text-quote">format_quote</Icon>
            <span>A hero is someone who has given his or her life to something bigger than oneself...</span>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default HeroList;
