import React from 'react';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import selectorFamilyPrefetch from '@recoil/selectorFamilyPrefetch';

function PersonCard({ name }) {
  const person = useRecoilValue(selectorFamilyPrefetch.selectorFamilies.personState(name));

  return (
    <Card title='사람 정보' key={person.name} style={{ width: 300 }}>
      <p>이름: {person.name}</p>
      <p>나이: {person.age}</p>
    </Card>
  );
}

PersonCard.propTypes = {
  name: PropTypes.string,
};

export default PersonCard;
