export default function tasksReducer(tasks: any, action: any) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t: any) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t: any) => t.id !== action.id);
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}

// const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

// const initialTasks = [
//   {id: 0, text: '参观卡夫卡博物馆', done: true},
//   {id: 1, text: '看木偶戏', done: false},
//   {id: 2, text: '打卡列侬墙', done: false},
// ];

// dispatch({
//   type: 'added',
//   id: nextId++,
//   text: text,
// });

// dispatch({
//   type: 'changed',
//   task: task,
// });

// dispatch({
//   type: 'deleted',
//   id: taskId,
// });


