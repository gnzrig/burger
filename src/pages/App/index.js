import css from './style.module.css';
import React from 'react';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage'
import SideBar from '../../components/SideBar';

function App() {
  return (
    <div>
      <Toolbar />
      <SideBar />
      <main className={css.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
