import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="module/:id" element={<ModuleView />} />
      </Route>
    </Routes>
  );
}

export default App;
