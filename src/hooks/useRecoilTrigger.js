import { useSetRecoilState } from 'recoil';

function useRecoilTrigger(state) {
  const setTrigger = useSetRecoilState(state);
  return () => setTrigger(requestID => requestID + 1);
}

export default useRecoilTrigger;
