import { useTranslation } from 'react-i18next'
import { FaCompactDisc } from 'react-icons/fa'
import { FaTableCells } from 'react-icons/fa6'
import { GiPowderBag } from 'react-icons/gi'
import { MdCatchingPokemon } from 'react-icons/md'
import { Link, Outlet } from 'react-router'

import NavBar from '@/components/NavBar'
import type { NavBarItem } from '@/components/NavBar/NavBar'
import Select, { type SelectOption } from '@/components/Select'
import { FLAG, PAGE, TWITTER_DATA } from '@/constants'
import { SUPPORTED_LOCALES } from '@/i18n'

const MainLayout = () => {
  const { t, i18n } = useTranslation('common')
  const currentLocale = i18n.language

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

  const localeSelectOptions: SelectOption[] = SUPPORTED_LOCALES.map(locale => ({
    label: locale.toUpperCase(),
    value: locale,
    icon: <img alt={locale} src={FLAG[locale]} />,
  }))

  const handleLocaleChange = (newValue: SelectOption | null) => {
    if (newValue) {
      i18n.changeLanguage(newValue.value)
    }
  }

  return (
    <div className='bg-red-700 size-full flex flex-col'>
      <header className='bg-red-800 flex items-center justify-between p-4'>
        <div className='flex items-center gap-2 text-xl font-extrabold'>
          <img className='size-10' alt='icon.webp' src='/images/icon.webp' />
          <span>{t('appName')}</span>
        </div>
        <Select
          options={localeSelectOptions}
          onChange={handleLocaleChange}
          defaultValue={currentLocale}
        />
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
