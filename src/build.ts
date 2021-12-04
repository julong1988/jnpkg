import Listr from 'listr';
import { basicTask, browserTask } from './tasks';

const buildLib = basicTask('lib');
const buildEs = basicTask('es');

const buildBrowser = browserTask({ name: 'pkgName', entry: 'src/index.ts' });

const buildAllTasks = [...buildLib, ...buildEs, ...buildBrowser];

const tasks = new Listr(buildAllTasks);

tasks
  .run()
  .then(() => console.log('%c✅ Success!', 'color:green'))
  .catch((err) => {
    console.error(err);
  });
