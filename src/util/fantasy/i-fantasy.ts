import { Fantasy } from './fantasy';

export interface IFantasy {
  [x: string]: any;
}

export const fantasy: IFantasy = {
  [Fantasy.of as string]: 'fantasy-land/of',
  [Fantasy.ap as string]: 'fantasy-land/ap',
  [Fantasy.map as string]: 'fantasy-land/map',
  [Fantasy.chain as string]: 'fantasy-land/chain',
};
