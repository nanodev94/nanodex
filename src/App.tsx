import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { PAGE } from './constants'

const ItemsPage = lazy(() => import('./pages/ItemsPage'))
const ItemDetailsPage = lazy(() => import('./pages/ItemDetailsPage'))
const MainLayout = lazy(() => import('./layouts/MainLayout'))
const MovesPage = lazy(() => import('./pages/MovesPage'))
const MoveDetailsPage = lazy(() => import('./pages/MoveDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const PokemonsPage = lazy(() => import('./pages/PokemonsPage'))
const PokemonDetailsPage = lazy(() => import('./pages/PokemonDetailsPage'))
const TypesPage = lazy(() => import('./pages/TypesPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route index element={<Navigate to={PAGE.POKEMONS} replace />} />
          <Route element={<MainLayout />}>
            <Route path={PAGE.POKEMONS}>
              <Route index element={<PokemonsPage />} />
              <Route path=':pokemonId' element={<PokemonDetailsPage />} />
            </Route>
            <Route path={PAGE.MOVES}>
              <Route index element={<MovesPage />} />
              <Route path=':moveId' element={<MoveDetailsPage />} />
            </Route>
            <Route path={PAGE.ITEMS}>
              <Route index element={<ItemsPage />} />
              <Route path=':itemId' element={<ItemDetailsPage />} />
            </Route>
            <Route path={PAGE.TYPES} element={<TypesPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
