import { Hero, Power, ViewMode } from '../models';

export enum HeroActionTypes {
  ADD_HERO = '[Hero] Add hero',
  ADD_HERO_SUCCESS = '[Hero] Added hero successfuly',
  LOAD_HEROES = '[Hero] Load all heroes',
  LOAD_HEROES_SUCCESS = '[Hero] Loaded all heroes successfuly',
  LOAD_POWERS = '[Hero] Load all powers',
  LOAD_POWERS_SUCCESS = '[Hero] Loaded all powers successfuly',
  REMOVE_HERO = '[Hero] Remove hero',
  REMOVE_HERO_SUCCESS = '[Hero] Removed hero successfuly',
  SELECT_HERO = '[Hero] Select hero',
  SET_VIEW_MODE = '[Hero] Set View Mode',
  SHOW_SNACKBAR = '[Hero] Show snackbar',
  HIDE_SNACKBAR = '[Hero] Hide snackbar',
  UPDATE_HERO = '[Hero] Update hero',
  UPDATE_HERO_SUCCESS = '[Hero] Updated hero succesfuly',
}

export interface AddHero {
  type: typeof HeroActionTypes.ADD_HERO;
  payload: Hero;
}

export interface AddHeroSuccess {
  type: typeof HeroActionTypes.ADD_HERO_SUCCESS;
  payload: Hero;
}

export interface LoadHeroes {
  type: typeof HeroActionTypes.LOAD_HEROES;
}

export interface LoadHeroesSuccess {
  type: typeof HeroActionTypes.LOAD_HEROES_SUCCESS;
  payload: Hero[];
}

export interface LoadPowers {
  type: typeof HeroActionTypes.LOAD_POWERS;
}

export interface LoadPowersSuccess {
  type: typeof HeroActionTypes.LOAD_POWERS_SUCCESS;
  payload: Power[];
}

export interface SelectHero {
  type: typeof HeroActionTypes.SELECT_HERO;
  payload: Hero;
}

export interface SetViewMode {
  type: typeof HeroActionTypes.SET_VIEW_MODE;
  payload: ViewMode;
}

export interface ShowSnackbar {
  type: typeof HeroActionTypes.SHOW_SNACKBAR;
  payload: string;
}

export interface HideSnackbar {
  type: typeof HeroActionTypes.HIDE_SNACKBAR;
}

export interface RemoveHero {
  type: typeof HeroActionTypes.REMOVE_HERO;
  payload: Hero;
}

export interface RemoveHeroSuccess {
  type: typeof HeroActionTypes.REMOVE_HERO_SUCCESS;
  payload: Hero;
}

export interface UpdateHero {
  type: typeof HeroActionTypes.UPDATE_HERO;
  payload: Hero;
}

export interface UpdateHeroSuccess {
  type: typeof HeroActionTypes.UPDATE_HERO_SUCCESS;
  payload: Hero;
}

export type HeroActions
  = AddHero
  | AddHeroSuccess
  | LoadHeroes
  | LoadHeroesSuccess
  | LoadPowers
  | LoadPowersSuccess
  | SelectHero
  | SetViewMode
  | ShowSnackbar
  | HideSnackbar
  | RemoveHero
  | RemoveHeroSuccess
  | UpdateHero
  | UpdateHeroSuccess;
