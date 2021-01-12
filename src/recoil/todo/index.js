import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show completed':
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
  set: ({ set }, data) => {
    set(todoListState, data);
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

// ---------------------recoil 작성 방법 고려 방안 --------------------------

// 1안 - subFix 로 XXXAtomState, XXXSelectorState or XXXAtom, XXXSelector 붙여서 사용

/*export const todoListFilterAtomState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListSelectorState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show completed':
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
  set: ({ set }, data) => {
    set(todoListState, data);
  },
});*/

// 2안 obj 로 관리 후 state subfix 붙이기 동일. 추후 XXXFamily 등 확장해도 사용 편리?...
// 단 컴포넌트 사용시 혼돈 방지를 위해 디스트럭처링 하지말고 바로 사용하도록..


/*
const todo = {
  atom: {
    todoListState: atom({
      key: 'todoListState',
      default: [],
    }),
    todoListFilterState: atom({
      key: 'todoListFilterState',
      default: 'Show All',
    }),
  },
  selector: {
    filteredTodoListState: selector({
      key: 'filteredTodoListState',
      get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
          case 'Show completed':
            return list.filter(item => item.isComplete);
          case 'Show Uncompleted':
            return list.filter(item => !item.isComplete);
          default:
            return list;
        }
      },
      set: ({ set }, data) => {
        set(todoListState, data);
      },
    }),
    todoListStatsState: selector({
      key: 'todoListStatsState',
      get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter(item => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
          totalNum,
          totalCompletedNum,
          totalUncompletedNum,
          percentCompleted,
        };
      },
    }),
  },
};

const value = useRecoilValue(todo.atom.todoListState);
*/

/**
 * ===== 방안3 이것도 한번 봐주세영!!
 * atoms, selectors를 나누었어요 지금보니 하나로 몰았을때, object 형태로 한꺼번에 import 될것을 대비하여 ㅎ
 * 각 atoms, selectors를 destructuring 합니다
 * 이렇게 하면, 각 항목들을 확인할 수 있고, key의 경우 prefix를 두고 segment로 unique 키를 놓으면 괜찮지 않을까요? :)
 *
  const PREFIX = 'TODO';

  export const atoms = {
    list: atom({
      key: `${PREFIX}/atom/list`,
      default: [],
    }),
    filter: atom({
      key: `${PREFIX}/atom/filter`,
      default: 'Show All',
    }),
  };

  export const selectors = {
    filtered: selector({
      key: `${PREFIX}/selector/filtered`,
      get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
          case 'Show completed':
            return list.filter(item => item.isComplete);
          case 'Show Uncompleted':
            return list.filter(item => !item.isComplete);
          default:
            return list;
        }
      },
      set: ({ set }, data) => {
        set(todoListState, data);
      },
    }),
    stats: selector({
      key: `${PREFIX}/selector/stats`,
      get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter(item => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
          totalNum,
          totalCompletedNum,
          totalUncompletedNum,
          percentCompleted,
        };
      },
    }),
  };

  import { atoms, selectors } from '@recoil/todo';

  const list = useRecoilState(atoms.list);
 */
