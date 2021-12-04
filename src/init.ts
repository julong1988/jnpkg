import { prompt } from 'enquirer';
import { writeFileSync, copySync } from 'fs-extra';
import { resolve } from 'path';
import { execaCommandSync } from 'execa';
import { PACKAGE_EX, QUESTIONS, JNPKGRC } from './const';
import { getPackage } from './utils';

const init = async () => {
  // get user input
  let awnser;
  try {
    awnser = await prompt(QUESTIONS);
  } catch (e) {
    console.log('%c❗️ out from prompt!', 'color:red');
  }
  const pkg = getPackage();
  // new package.json
  const newPackage = {
    ...pkg,
    ...awnser,
    ...PACKAGE_EX,
  };

  // write package.json & .jnpkgrc
  writeFileSync('./package.json', JSON.stringify(newPackage, null, 2));
  writeFileSync('./.jnpkgrc', JSON.stringify(JNPKGRC, null, 2));

  // copy files
  copySync(resolve(__dirname, './template'), './');

  // install dependencies
  execaCommandSync('npm install', { stdio: 'inherit' });
};

export default init;
