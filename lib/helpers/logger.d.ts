export interface Logger {
  log(message: string): void;
  error(error: Error): void;
}
export declare const createLogger: (
  info: import('typescript/lib/tsserverlibrary').server.PluginCreateInfo,
) => Logger;
