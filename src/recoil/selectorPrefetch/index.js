
import { atom, selector } from 'recoil';
import useRecoilTrigger from '@hooks/useRecoilTrigger';
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
    return useRecoilTrigger(atoms.personListTriggerState);
  },
};

export default {
  selectors,
  trigger,
};

