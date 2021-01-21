import { RecoilRoot } from 'recoil';
// components
import Layout from '@components/Layout';

// Rotues
import Routes from './Routes';

const App = () => {
  return (
    <RecoilRoot>
      <Layout>
        <Routes />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
