
import { atom, selector, useSetRecoilState} from 'recoil';
import getPerson from '../../apis/person';

const PREFIX = 'SELECTOR_PREFETCH';

const atoms = {
  personListTriggerState: atom({
    key: `${PREFIX}/personListTriggerState`,
    default: 0,
  }),
};

const selectors = {
  personListState: selector({
    key: `${PREFIX}/personListState`,
    get: async ({ get }) => {
      get(atoms.personListTriggerState); // 캐싱 트리거용
      const [ person1, person2 ] = await Promise.all([getPerson('1'), getPerson('2')]);
      return [person1, person2];
    },
  }),
};

// 캐싱된 select 캐시 새로고침용
const trigger = {
  useRefreshPersonList() {
    const setTrigger = useSetRecoilState(atoms.personListTriggerState);
    return () => {
      console.log('call trigger useRefreshPersonList');
      setTrigger(requestID => requestID + 1);
    };
  },
};

export default {
  selectors,
  trigger,
};

