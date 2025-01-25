import { Routes, Route} from 'react-router-dom';
import Header from './components/NavComps/Header.jsx'
import BottomNav from './components/NavComps/BottomNav.jsx';

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <BottomNav />
    </>
  )
}

export default App;