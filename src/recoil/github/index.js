import { selectorFamily } from 'recoil';
const PREFIX = 'GIT_HUB';

const atoms = {};

const selectors = {};

const selectorFamilies = {
  githubStarCountState: selectorFamily({
    key: `${PREFIX}/selectorFamily/githubStarCountState`,
    get: repoName => async () => {
      const response = await fetch(`https://api.github.com/repos/${repoName}`);
      const recoilProjectInfo = await response.json();
      return recoilProjectInfo['stargazers_count'];
    },
  }),
};

export default {
  atoms,
  selectors,
  selectorFamilies,
};
