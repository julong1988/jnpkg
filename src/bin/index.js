import { Select } from 'enquirer';
import chalk from 'chalk';
import minimist from 'minimist';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const argv = minimist(process.argv.slice(2));

const getBinPath = () => {
  const globalPath = path.resolve(__dirname, '../../node_modules/.bin');
  const localPath = path.resolve(__dirname, '../../../.bin');
  let binPath;
  try {
    fs.lstatSync(globalPath).isDirectory()
    binPath = globalPath;
  } catch {
    binPath = localPath;
  }
  return binPath;
}

const binPath = getBinPath();
const targetSrc = `${path.resolve('./')}/src`;
const buildFile = `${path.resolve(__dirname, '../scripts/build.js')}`;

const scripts = {
  watch: `${binPath}/nodemon -e js,jsx,ts,tsx,json --watch ${targetSrc} ${buildFile}`,
  build: `node ${path.resolve(__dirname, '../scripts/build.js')}`,
};

const command = Object.keys(scripts);

// arguments 지원하지 않은 경우
if (argv._[0] && !command.includes(argv._[0])) {
  console.log(chalk.red('지원하지 않는 명령입니다.'));
  console.log(chalk.blue('arguments를 확인해주세요.'));
  console.log(command);
  process.exit();
}

const options = {
  name: 'type',
  message: '실행할 이벤트를 선택하세요.',
  choices: command,
};

// eslint-disable-next-line
const run = async () => !argv._[0] ? await new Select(options).run() : argv._[0];

run()
  .then((option) => {
    execSync(scripts[option], { stdio: 'inherit' });
  })
  .catch(() => {
    // error
  });
