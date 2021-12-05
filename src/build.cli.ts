import Listr from 'listr';
import { getConfig, getPackage } from './utils';
import { cliTask } from './tasks';

const { binEntry } = getConfig();

const buildCli = cliTask({ binEntry });

const buildAllTasks = [...buildCli];

const tasks = new Listr(buildAllTasks);

tasks
  .run()
  .then(() => {
    if (getPackage(false).bin) {
      return console.log('%c✅ Success!', 'color:green');
    }
    console.log('%c⚠️ package.json add bin property', 'color:green');
  })
  .catch((err) => {
    console.error(err);
  });
