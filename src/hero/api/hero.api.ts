import { Hero, Power } from '../models';

export class HeroApi {

  static getHeroes(): Promise<Hero[]> {
    return Promise.resolve([
      { id: 1, name: 'Captain America', powerId: 5, quote: `You can't justify murder by masking it with a cause.` },
      { id: 2, name: 'Cat Woman', powerId: 14, quote: `Like the view? It's the only thing you'll be catching tonight.` },
      { id: 3, name: 'Flash', powerId: 12, quote: `Life doesn't give us purpose. We give life purpose.` },
      { id: 4, name: 'Spiderman', powerId: 9, quote: `With great power comes great responsability.` },
      { id: 5, name: 'Robin', powerId: 4, quote: `Holy funny bone.` },
    ]);
  }

  static getPowers(): Promise<Power[]> {
    return Promise.resolve([
      { id: 1, name: 'Intangibility' },
      { id: 2, name: 'Force Field' },
      { id: 3, name: 'Mind Control' },
      { id: 4, name: 'Superhuman Intelligence' },
      { id: 5, name: 'Superhuman Agility' },
      { id: 6, name: 'Time Manipulation' },
      { id: 7, name: 'Teleportation' },
      { id: 8, name: 'Precognition' },
      { id: 9, name: 'Wall Crawling' },
      { id: 10, name: 'Atmokinesis' },
      { id: 11, name: 'Omnilinguilism' },
      { id: 12, name: 'Superhuman Speed' },
      { id: 13, name: 'Telepathy' },
      { id: 14, name: 'Night Vision' },
      { id: 15, name: 'Time Travel' },
      { id: 16, name: 'Invulnerability' },
      { id: 17, name: 'Water Breathing' },
      { id: 18, name: 'Superhuman Endurance' },
      { id: 19, name: 'Healing' },
      { id: 20, name: 'Superhuman Strength' },
      { id: 21, name: 'Invincibility' },
      { id: 22, name: 'Flying' },
    ]);
  }
}
