import { Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx'

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  )
}

export default App;