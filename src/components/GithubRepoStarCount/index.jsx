import React from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import withSuspense from '@hoc/withSuspense';
import github from '@recoil/github';


const GithubRepoStarCount = ({ repoName }) => {
  const starCount = useRecoilValue(github.selectorFamilies.githubStarCountState(repoName));

  return (
    <>
      <p> {repoName} gitbub star 갯수 </p>
      <p>{starCount}개</p>
    </>
  );
};

GithubRepoStarCount.propTypes = {
  repoName: PropTypes.string.isRequired,
};

const fallback = () => {
  return <div>로딩중 입니다.</div>;
};


// withSuspense 래핑 (첫번째 파라미터: 대상 컴포넌트, 두번째 파라미터: 폴백 컴포넌트)
export default withSuspense(GithubRepoStarCount, fallback());
