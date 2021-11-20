import Listr from 'listr';
import buildAllTasks from './tasks';

const tasks = new Listr(buildAllTasks);

tasks
  .run()
  .then(() => console.log('Success'))
  .catch((err) => {
    console.error(err);
  });
