import { Hero, Power, ViewMode } from '../models';
import * as HeroTypes from './hero.types';

export const addHero = (hero: Hero): HeroTypes.AddHero => {
  return {
    type: HeroTypes.HeroActionTypes.ADD_HERO,
    payload: hero,
  };
};

export const addHeroSuccess = (hero: Hero): HeroTypes.AddHeroSuccess => {
  return {
    type: HeroTypes.HeroActionTypes.ADD_HERO_SUCCESS,
    payload: hero,
  };
};

export const loadHeroes = (): HeroTypes.LoadHeroes => {
  return {
    type: HeroTypes.HeroActionTypes.LOAD_HEROES,
  };
};

export const loadHeroesSuccess = (heroes: Hero[]): HeroTypes.LoadHeroesSuccess => {
  return {
    type: HeroTypes.HeroActionTypes.LOAD_HEROES_SUCCESS,
    payload: heroes,
  };
};

export const loadPowers = (): HeroTypes.LoadPowers => {
  return {
    type: HeroTypes.HeroActionTypes.LOAD_POWERS,
  };
};

export const loadPowersSuccess = (powers: Power[]): HeroTypes.LoadPowersSuccess => {
  return {
    type: HeroTypes.HeroActionTypes.LOAD_POWERS_SUCCESS,
    payload: powers,
  };
};

export const removeHero = (hero: Hero): HeroTypes.RemoveHero => {
  return {
    type: HeroTypes.HeroActionTypes.REMOVE_HERO,
    payload: hero,
  };
};

export const removeHeroSuccess = (hero: Hero): HeroTypes.RemoveHeroSuccess => {
  return {
    type: HeroTypes.HeroActionTypes.REMOVE_HERO_SUCCESS,
    payload: hero,
  };
};

export const selectHero = (hero: Hero): HeroTypes.SelectHero => {
  return {
    type: HeroTypes.HeroActionTypes.SELECT_HERO,
    payload: hero,
  };
};

export const setViewMode = (viewMode: ViewMode): HeroTypes.SetViewMode => {
  return {
    type: HeroTypes.HeroActionTypes.SET_VIEW_MODE,
    payload: viewMode,
  };
};

export const showSnackbar = (message: string): HeroTypes.ShowSnackbar => {
  return {
    type: HeroTypes.HeroActionTypes.SHOW_SNACKBAR,
    payload: message,
  };
};

export const hideSnackbar = (): HeroTypes.HideSnackbar => {
  return {
    type: HeroTypes.HeroActionTypes.HIDE_SNACKBAR,
  };
};

export const updateHero = (hero: Hero): HeroTypes.UpdateHero => {
  return {
    type: HeroTypes.HeroActionTypes.UPDATE_HERO,
    payload: hero,
  };
};

export const updateHeroSuccess = (hero: Hero): HeroTypes.UpdateHeroSuccess => {
  return {
    type: HeroTypes.HeroActionTypes.UPDATE_HERO_SUCCESS,
    payload: hero,
  };
};
