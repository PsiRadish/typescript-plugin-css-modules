import { IICSSExports } from 'icss-utils';
import * as postcss from 'postcss';
import * as ts_module from 'typescript/lib/tsserverlibrary';
import { Options } from '../options';
import { Logger } from './logger';
export declare const enum FileTypes {
  css = 'css',
  less = 'less',
  scss = 'scss',
}
export declare const getFileType: (fileName: string) => FileTypes;
export declare class DtsSnapshotCreator {
  private readonly logger;
  constructor(logger: Logger);
  getClasses(
    processor: postcss.Processor,
    css: string,
    fileName: string,
  ): IICSSExports;
  createExports(classes: IICSSExports, options: Options): string;
  getDtsSnapshot(
    ts: typeof ts_module,
    processor: postcss.Processor,
    fileName: string,
    scriptSnapshot: ts.IScriptSnapshot,
    options: Options,
  ): ts_module.IScriptSnapshot;
}
