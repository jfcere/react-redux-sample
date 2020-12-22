/// <reference types="react-scripts" />

declare module 'inflected' {

  function inflections(locale: string, fn: (inflect: Inflect) => void);

  interface Inflect {
    irregular: (singular: string, plural: string) => void;
  }
}
