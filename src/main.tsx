import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Roll from './pages/Roll.tsx';
import Game from './pages/Game.tsx';
import Rolls from './pages/Rolls.tsx';
import Games from './pages/Games.tsx';
import GameRoll from './pages/GameRoll.tsx';
import NewRoll from './pages/NewRoll.tsx';
import NewGame from './pages/NewGame.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  }, {
    path: "/roll",
    element: <NewRoll></NewRoll>,
  }, {
    path: "/roll/:rollId",
    element: <Roll></Roll>,
  }, {
    path: "/rolls",
    element: <Rolls></Rolls>,
  }, {
    path: "/game",
    element: <NewGame></NewGame>,
  },
   {
    path: "/game/:gameId",
    element: <Game></Game>,
  }, {
    path: "/games",
    element: <Games></Games>,
  },
  {
    path: "/game/roll",
    element: <GameRoll></GameRoll>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
