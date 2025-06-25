import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <span>MainLayout</span>
      <Outlet />
    </div>
  )
}

export default MainLayout
