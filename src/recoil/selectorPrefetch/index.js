
import { selector } from 'recoil';
import getPerson from '../../apis/person';

const PREFIX = 'SELECTOR_PREFETCH';

const selectors = {
  personListState: selector({
    key: `${PREFIX}/personListState`,
    get: async () => {
      const [ person1, person2 ] = await Promise.all([getPerson('1'), getPerson('2')]);
      return [person1, person2];
    },
  }),
};

export default {
  selectors,
};

