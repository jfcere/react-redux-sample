import { Hero, Power, ViewMode } from '../models';
import { HeroActions, HeroActionTypes } from './hero.types';

export interface HeroState {
  heroes: Hero[];
  powers: Power[];
  loadingHeroes: boolean;
  loadingPowers: boolean;
  selectedHero?: Hero;
  snackbarOpen: boolean;
  snackbarMessage?: string;
  viewMode: ViewMode;
}

const initialState: HeroState = {
  heroes: Array<Hero>(),
  powers: Array<Power>(),
  loadingHeroes: false,
  loadingPowers: false,
  snackbarOpen: false,
  viewMode: ViewMode.List,
};

const reducer = (state = initialState, action: HeroActions): HeroState => {
  switch (action.type) {
    case HeroActionTypes.ADD_HERO_SUCCESS:
      return {
        ...state,
        heroes: state.heroes.concat(action.payload),
        selectedHero: undefined,
      };
    case HeroActionTypes.LOAD_HEROES:
      return {
        ...state,
        loadingHeroes: true,
      };
    case HeroActionTypes.LOAD_HEROES_SUCCESS:
      return {
        ...state,
        heroes: action.payload,
        loadingHeroes: false,
      };
    case HeroActionTypes.LOAD_POWERS:
      return {
        ...state,
        loadingPowers: true,
      };
    case HeroActionTypes.LOAD_POWERS_SUCCESS:
      return {
        ...state,
        powers: action.payload,
        loadingPowers: false,
      };
    case HeroActionTypes.REMOVE_HERO:
      return {
        ...state,
        heroes: state.heroes.filter(x => x.id !== action.payload.id),
        selectedHero: undefined,
      };
    case HeroActionTypes.SELECT_HERO:
      return {
        ...state,
        selectedHero: action.payload,
      };
    case HeroActionTypes.SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload,
      };
    case HeroActionTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.payload,
      };
    case HeroActionTypes.HIDE_SNACKBAR:
      return {
        ...state,
        snackbarOpen: false,
        snackbarMessage: undefined,
      };
    case HeroActionTypes.UPDATE_HERO_SUCCESS:
      return {
        ...state,
        heroes: state.heroes.map(x => x.id === action.payload.id ? action.payload : x),
        selectedHero: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
