import {SyntheticEvent} from 'react';

export type HeaderRightType = {
  name?: string;
  size?: number;
  color?: string;
  onPress?: (e: SyntheticEvent) => Promise<void> | void;
};
