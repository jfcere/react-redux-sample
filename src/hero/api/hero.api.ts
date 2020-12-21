import axios from 'axios';
import { Hero, Power } from '../models';

export class HeroApi {

  // heroes

  static async createHero(hero: Hero): Promise<Hero> {
    const response = await axios.post('/api/heroes', hero);
    return response.data;
  }

  static async deleteHero(hero: Hero): Promise<Hero> {
    const response = await axios.delete(`/api/heroes/${hero.id}`);
    return response.data;
  }

  static async getHeroes(): Promise<Hero[]> {
    const response = await axios.get<Hero[]>('/api/heroes');
    return response.data;
  }

  static async updateHero(hero: Hero): Promise<Hero> {
    const response = await axios.put(`/api/heroes/${hero.id}`, hero);
    return response.data;
  }

  // powers

  static async getPowers(): Promise<Power[]> {
    const response = await axios.get<Power[]>('/api/powers');
    return response.data;
  }
}
