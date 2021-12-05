import minimist from 'minimist';
import { prompt } from 'enquirer';
import { execaCommandSync } from 'execa';
import { CLIENT_SRC_PATH, BUILD_FILE_PATH, BUILD_CLI_FILE_PATH } from './const';
import { baseOptions, getBinPath } from './utils';
import init from './init';

const argv = minimist(process.argv.slice(2));

const BIN_PATH = getBinPath();

const EXTS = ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs', 'cjs'];

const scripts = {
  watch: `${BIN_PATH}/nodemon -e ${EXTS.join(',')} --watch ${CLIENT_SRC_PATH} ${BUILD_FILE_PATH}`,
  build: `node ${BUILD_FILE_PATH}`,
  buildCli: `node ${BUILD_CLI_FILE_PATH}`,
  init,
};

const commands: string[] = Object.keys(scripts);

// not supported command
if (argv._[0] && !commands.includes(argv._[0])) {
  console.log('%c❗️ not supported command!', 'color:red');
  process.exit();
}

const run = () => {
  if (!argv._[0]) {
    return prompt(baseOptions(commands));
  }
  // eslint-disable-next-line
  return new Promise((resolve) => resolve({ type: argv._[0] }));
};

run()
  .then(({ type }: any) => {
    const command = scripts[type];
    const isFn = typeof command === 'function';
    return isFn ? command() : execaCommandSync(command, { stdio: 'inherit' });
  })
  .catch((err) => {
    console.log(err);
  });
