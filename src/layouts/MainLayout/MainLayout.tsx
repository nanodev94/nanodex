import { useTranslation } from 'react-i18next'
import { FaCompactDisc } from 'react-icons/fa'
import { FaTableCells } from 'react-icons/fa6'
import { GiPowderBag } from 'react-icons/gi'
import { MdCatchingPokemon } from 'react-icons/md'
import { Link, Outlet } from 'react-router'

import NavBar from '@/components/NavBar'
import type { NavBarItem } from '@/components/NavBar/NavBar'
import { PAGE, TWITTER_DATA } from '@/constants'

const MainLayout = () => {
  const { t } = useTranslation('common')

  const navBarItems: NavBarItem[] = [
    {
      icon: <MdCatchingPokemon size={40} />,
      label: t('navBar.pokemons'),
      to: PAGE.POKEMONS,
    },
    {
      icon: <FaCompactDisc size={40} />,
      label: t('navBar.moves'),
      to: PAGE.MOVES,
    },
    {
      icon: <GiPowderBag size={40} />,
      label: t('navBar.items'),
      to: PAGE.ITEMS,
    },
    {
      icon: <FaTableCells size={40} />,
      label: t('navBar.types'),
      to: PAGE.TYPES,
    },
  ]

  return (
    <div className='bg-red-700 size-full flex flex-col'>
      <header className='bg-red-800 flex items-center justify-between p-4'>
        <div className='flex items-center gap-2 text-xl font-extrabold'>
          <img className='size-10' alt='icon.webp' src='/images/icon.webp' />
          <span>{t('appName')}</span>
        </div>
        <span>ES</span>
      </header>
      <main className='grow'>
        <Outlet />
      </main>
      <footer className='bg-red-800'>
        <NavBar items={navBarItems} />
        <span className='text-sm'>
          @Copyright 2025 -{' '}
          <Link
            className='font-bold hover:text-link-hover-color'
            to={TWITTER_DATA.site}
            target='_blank'
          >
            {TWITTER_DATA.creator}
          </Link>
        </span>
      </footer>
    </div>
  )
}

export default MainLayout
