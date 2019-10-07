export interface Options {
  camelCase?: CamelCaseOptions;
  customMatcher?: string;
}
export declare type CamelCaseOptions =
  | true
  | 'dashes'
  | 'dashesOnly'
  | 'only'
  | undefined;
