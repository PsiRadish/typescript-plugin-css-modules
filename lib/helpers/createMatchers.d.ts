import { Options } from '../options';
import { Logger } from './logger';
export declare const createMatchers: (
  logger: Logger,
  options?: Options,
) => {
  isCSS: import('./cssExtensions').isCSSFn;
  isRelativeCSS: (fileName: string) => boolean;
};
