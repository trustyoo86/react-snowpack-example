
import { atomFamily, selectorFamily, useSetRecoilState } from 'recoil';
import getPerson from '../../apis/person';

const PREFIX = 'SELECTOR_FAMILY_PREFETCH';


const atomFamilies = {
  personNameState: atomFamily({
    key: `${PREFIX}/personNameState`,
    default: 0,
  }),
};

const selectorFamilies = {
  personState: selectorFamily({
    key: `${PREFIX}personState`,
    get: name => async ({ get }) => {
      console.log('call : selectorFamilies');
      // 의존하는 atomFamily가 trigger를 통해 변경되면 새로고침 진행 (캐시 초기화)
      get(atomFamilies.personNameState(name));
      return await getPerson(name);
    },
  }),
};

// 캐싱된 selectFamily 캐시 새로고침용
const trigger = {
  useRefreshUserInfo(name) {
    const setTrigger = useSetRecoilState(atomFamilies.personNameState(name));
    return () => {
      console.log('call trigger ' + name);
      setTrigger(requestID => requestID + 1);
    };
  },
};

export default {
  atomFamilies,
  selectorFamilies,
  trigger,
};
