import classes from './navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import NotificationNoneIcon from '@mui/icons-material/NotificationsNone'
import {logo} from '../../utils/constants'
const Navbar = () => {
  return (
    <div className={classes.container}>
      <div  className={classes.wrapper}>
      <div className={classes.leftSide}>
        <MenuIcon className={classes.menuIcon}/>
        <img src={logo}  />
      </div>
      <div className={classes.centerSide}>
      <input type='text' placeholder='Search...'/>
      <SearchIcon className={classes.searchIcon}/>
      </div>
      <div className={classes.rightSide}>
      <VideoCameraBackIcon/>
      <NotificationNoneIcon/>
      <div className={classes.profileCircle}>
      <span></span>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
