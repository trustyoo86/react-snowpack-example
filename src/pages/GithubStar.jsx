import { Suspense } from 'react';
import { PageHeader } from 'antd';
import GithubRepoStarCount from '@components/GithubRepoStarCount';

const GithubStar = () => {
  return <>
    <PageHeader
      title='GithubStar'
      subTitle='GithubStar gitHub info'
    />
    <div>
      {/* useSuspense 가 props 으로 없으면 기본값으로 true가 들어가 suspense hoc 에서 작동 */}
      <GithubRepoStarCount repoName='facebook/react' />
      {/* useSuspense 가 true일 경우 hoc suspense 작동 */}
      <GithubRepoStarCount useSuspense repoName='facebookexperimental/Recoil' />
      <Suspense fallback={<div>폴백 로딩중</div>} >
        {/* 별개의 fallback 이 필요 한 경우 useSuspense 을 false로 설정한 후 suspense 래핑 */}
        <GithubRepoStarCount useSuspense={false} repoName='trustyoo86/react-snowpack-example' />
      </Suspense>
    </div>
  </>;
};

export default GithubStar;
