
import { selector } from 'recoil';

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

const getPerson = name => new Promise((resolve) => {
  const person = {
    name,
    age: name.length * 10,
  };

  setTimeout(() => resolve(person), 2000);
});

