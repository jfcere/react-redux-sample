import axios from 'axios';

import { Theme } from '../models';

export class CoreApi {

  static async getTheme(): Promise<Theme> {
    const response = await axios.get<{ theme: Theme}>('api/theme');
    return response.data.theme;
  }

  static async setTheme(theme: Theme): Promise<void> {
    await axios.post<void>('api/theme', theme);
  }
}
