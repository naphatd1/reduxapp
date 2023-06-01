import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarchartIcon from '@mui/icons-material/BarChart';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { NavLink, useLocation } from 'react-router-dom'
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import PeopleIcon from '@mui/icons-material/People';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';

type MenuItem = {
  label: string
  icon: any
  href: string
}
type SeMenuItem = {
  label: string
  icon: any
  href: string
}

export const MainListItems = () => {
  const location = useLocation()
  const menuItem: Array<MenuItem> = [
    { label: "หน้าหลัก", icon: <DashboardIcon />, href: '/dashboard' },
    { label: "ยื่นใบลา", icon: <PeopleIcon />, href: '/dashboard/request-for-leave' },
    { label: "จัดการข้อมูลการลา", icon: <BarchartIcon />, href: '/dashboard/manage-leave' },
  ]
  
  return (
    <React.Fragment>
      {
        menuItem.map((item) =>
          <ListItemButton key={item.label} component={NavLink} to={item.href} sx={{backgroundColor: location.pathname === item.href ? 'grey.300' : '' }}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        )
      }
    </React.Fragment>
  );
}
export const SecondaryListItems = () => {
  const semenuItem: Array<SeMenuItem> = [
    { label: "จัดการ", icon: <SettingsTwoToneIcon />, href: '#' },
    { label: "รายชื่อ", icon: <PeopleIcon />, href: '#' },
    { label: "ที่อยู่", icon: <OtherHousesIcon />, href: '#' },
  ]
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      {
        semenuItem.map((item) =>
          <ListItemButton key={item.label}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        )
      }
    </React.Fragment>
  )
};
