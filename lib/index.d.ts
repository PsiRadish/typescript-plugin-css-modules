import * as ts_module from 'typescript/lib/tsserverlibrary';
declare function init({
  typescript: ts,
}: {
  typescript: typeof ts_module;
}): {
  create: (
    info: ts_module.server.PluginCreateInfo,
  ) => ts_module.LanguageService;
  getExternalFiles: (
    project: ts_module.server.ConfiguredProject,
  ) => ts_module.server.NormalizedPath[];
};
export = init;
