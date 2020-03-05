import { Theme } from '@material-ui/core';

import { lightTheme } from '../themes';

export class CoreApi {

  static getTheme(): Promise<Theme> {
    return Promise.resolve(lightTheme);
  }
}
