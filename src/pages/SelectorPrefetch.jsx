import React, { useState, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { PageHeader, Button, Card } from 'antd';

import selectorPrefetch from '@recoil/selectorPrefetch';

function SelectorPrefetch() {
  const [ isShowSelector, setIsShowSelector ] = useState(false);


  const onPrefetchSelector = useRecoilCallback(({ snapshot }) => async () => {
    snapshot.getLoadable(selectorPrefetch.selectors.personListState);
  });

  return (
    <PageHeader
      title="selector prefetch 예시"
      subTitle="'셀렉터 prefetch 하기' 버튼을 먼저 클릭하면 selector에 대한 prefetch 를 먼저 진행하게 되어 '셀렉터 보여주기' 클릭시 이미 요청 완료된 결과를 바로 확인할 수 있습니다. "
    >
      <Button onClick={() => onPrefetchSelector()}>셀렉터 prefetch 하기</Button>
      <Button onClick={() => setIsShowSelector(true)}>셀렉터 보여주기</Button>
      {
        isShowSelector && (
          <Suspense fallback={<div>로딩중</div>} >
            <SelectorList />
          </Suspense>
        )
      }
    </PageHeader>
  );
}

export default SelectorPrefetch;

function SelectorList() {
  const personList = useRecoilValue(selectorPrefetch.selectors.personListState);

  return (
    <>
      {
        personList.map((person) => {
          return (
            <Card title='사람 정보' key={person.name} style={{ width: 300 }}>
              <p>이름: {person.name}</p>
              <p>나이: {person.age}</p>
            </Card>
          );
        })
      }
    </>
  );
}
