import React, { useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useRecoilCallback, useRecoilValueLoadable } from 'recoil';
import { Button, Input, PageHeader, Space, Timeline } from 'antd';

import PersonCard from '@components/PersonCard';
import selectorFamilyPrefetch from '@recoil/selectorFamilyPrefetch';

const MSG = {
  EMPTY_NAME: '추가할 이름을 입력해 주세요.',
  DUPLICATE_NAME: '동명이인 존재',
};

function SelectorFamilyPrefetch() {
  const [ name, setName ] = useState('');
  const [ personList, setPersonList ] = useState([]);
  const [ activePersonName, setActivePersonName ] = useState('');

  const onClickAddPerson = () => {
    if (name === '') {
      alert(MSG.EMPTY_NAME);
      return;
    }
    const isDuplicateName = personList.some(n => n === name);

    if (isDuplicateName) {
      alert(MSG.DUPLICATE_NAME);
      return;
    }

    setPersonList(prevState => [...prevState, name]);
    setName('');
  };


  return (
    <PageHeader
      title='selectorFamily 에 대한 prefetch 및 캐싱 강제 초기화(refresh) 예제'>
      <p>테스트 가이드</p>
      <Timeline>
        <Timeline.Item>1. 사람 정보를 2개 만들어 줍니다. </Timeline.Item>
        <Timeline.Item>2. 두번째 사람 정보 불러오기 버튼을 클릭해 2번째 사람의 정보를 확인해 봅니다.</Timeline.Item>
        <Timeline.Item>3. 첫번쨰 사람 정보 리셋 버튼을 클릭해 첫번째 사람의 정보를 캐싱 초기화해 다시 prefetch 하도록 합니다.</Timeline.Item>
        <Timeline.Item>4. .5초 기다린 후 첫번째사람 정보 불러오기 버튼을 클릭해서 새로 갱신된 정보가 보이는 것을 확인합니다.</Timeline.Item>
      </Timeline>
      <Space>
        <Input value={name} placeholder='이름을 입력해주세요.' size='medium' onChange={e => setName(e.target.value)} />
        <Button onClick={onClickAddPerson}>사람 추가</Button>
        <div>
          {
            personList.map((name) => {
              return <Button key={name} onClick={() => setActivePersonName(name)}>{name} 정보 불러오기</Button>;
            })
          }
        </div>
        <div>
          {
            personList.map(name => <ResetPerson key={name} name={name} />)
          }
        </div>
        <br />
        {
          activePersonName !== '' && (
            <div>
              <h2>선택한 사람정보</h2>
              <Suspense fallback={<div>로딩중</div>}>
                <PersonCard name={activePersonName} />
              </Suspense>
            </div>
          )
        }
      </Space>
    </PageHeader>
  );
}

export default SelectorFamilyPrefetch;

function ResetPerson({ name }) {
  // prefetch 를 위해선 참조하고 있어야 하므로 사용하지 않지만 넣어둔.. 비운의..
  const preValue = useRecoilValueLoadable(selectorFamilyPrefetch.selectorFamilies.personState(name));
  const refresh = selectorFamilyPrefetch.trigger.useRefreshUserInfo(name);

  // 실패한 prefetch
  const onPrefetch = useRecoilCallback(({ snapshot, set }) => async (name) => {
    await refresh();
    snapshot.getLoadable(selectorFamilyPrefetch.selectorFamilies.personState(name));
  });


  return <Button key={name} onClick={() => refresh()}>{name} 정보 리셋하기</Button>;
}

ResetPerson.propTypes = {
  name: PropTypes.string,
};
