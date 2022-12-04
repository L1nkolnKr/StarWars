import { Route, Routes } from 'react-router';
import Header from '../../components/Header';
import NotFoundPage from '../NotFoundPage';

import PeoplePage from '../PeoplePage';
import styles from './App.module.css';

const App = () => {
  return(
    <>
    <div className={styles.wrapper}>
        <Header/>
        <Routes>
          <Route path="/" element={""}/>
          <Route path="/people" element={<PeoplePage/>}/>
          <Route path="*" element={<NotFoundPage  />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
