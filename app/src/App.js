import './App.css';
import '@screentone/core/css/index.css';
import { PageWrapper } from '@screentone/core';
import Wireframe from './components/Wireframe';

const App = () => {
  return (
    <div className="App st-root">
      <PageWrapper>
        <Wireframe />
      </PageWrapper>
    </div>
  );
};

export default App;
