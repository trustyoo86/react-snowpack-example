import { Suspense } from 'react';
import PropTypes from 'prop-types';

withSuspense.propTypes = {
  WrappedComponent: PropTypes.func.isRequired,
  FallbackComponent: PropTypes.func,
};

function withSuspense(WrappedComponent, FallbackComponent = null) {

  // 기본적으로 useSuspense 를 props 에 안넣어도 true 동작
  const wrapped = ({ useSuspense = true, ...rest }) => {
    // FallbackComponent 미설정시 래핑 컴포넌트만 출력
    if (!FallbackComponent) {
      return <WrappedComponent {...rest} />;
    }

    // useSuspense 옵션이 존재하고 해당 옵션이 false 일 경우 (suspense를 사용한다고 명시한 경우)
    if (useSuspense === false) {
      return <WrappedComponent {...rest} />;
    }

    return (
      <Suspense fallback={FallbackComponent}>
        <WrappedComponent {...rest} />
      </Suspense>
    );
  };

  wrapped.propTypes = {
    useSuspense: PropTypes.bool,
  };

  return wrapped;
}


export default withSuspense;


