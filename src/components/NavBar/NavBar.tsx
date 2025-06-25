import { useLocation, useNavigate } from 'react-router'

export interface NavBarItem {
  icon: React.ReactNode
  label: string
  to: string
}

interface Props {
  items: NavBarItem[]
}

const NavBar = ({ items }: Props) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleItemClick = (to: string) => {
    if (location.pathname !== to) {
      navigate(to)
    }
  }
  return (
    <nav className='flex items-center justify-around'>
      {items.map(({ icon, label, to }) => (
        <button
          key={label}
          className='flex items-center justify-center gap-2 py-4 grow font-extrabold border-b-2 border-r-2 [&:last-child]:border-r-0 hover:cursor-pointer'
          onClick={() => handleItemClick(to)}
        >
          {icon}
          <span className='text-lg hidden sm:inline'>{label}</span>
        </button>
      ))}
    </nav>
  )
}

export default NavBar
