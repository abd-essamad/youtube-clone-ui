import classes from './menu.module.css'
import HomeIcon from '@mui/icons-material/Home'
import { AccountCircleOutlined, ArticleOutlined,
ExploreOutlined, FlagOutlined, HelpOutlineOutlined, 
HistoryOutlined, LibraryMusicOutlined, LiveTvOutlined,
MovieOutlined, SettingsBrightnessOutlined, SettingsOutlined,
SportsBasketballOutlined, SportsEsportsOutlined,
SubscriptionsOutlined,
SubscriptOutlined, VideoLibraryOutlined } 
from '@mui/icons-material'
const Menu = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <div className={classes.item}>
      <HomeIcon/> <span>Home</span>
      </div>
      <div className={classes.item}>
      <ExploreOutlined/> <span>Explore</span>
      </div>
      <div className={classes.item}>
      <SubscriptionsOutlined/> <span>Subscriptions</span>
      </div>
      <div className={classes.item}>
      <VideoLibraryOutlined/> <span>Library</span>
      </div>
      <div className={classes.item}>
      <HistoryOutlined/> <span>Histroy</span>
      </div>
      <hr className={classes.hr} />
      <div className={classes.signIn}>
      <span className={classes.signInText} >
        Sign in to like videos, comment and subscribe.
      </span>
      <div className={classes.signInContainer}>
      <AccountCircleOutlined className={classes.emoji}/> 
      <span>SIGN IN</span>
      </div>
      </div>
      <hr className={classes.hr} />
      <h3 className={classes.heading}>BEST OF OUR PLATFORM</h3>
      <div className={classes.item}>
      <LibraryMusicOutlined/> <span>Music</span>
      </div>
      <div className={classes.item}>
      <SportsBasketballOutlined/> <span>Sports</span>
      </div>
      <div className={classes.item}>
      <SportsEsportsOutlined/> <span>Gaming</span>
      </div>
      <div className={classes.item}>
      <MovieOutlined/> <span>Movies</span>
      </div>
      <div className={classes.item}>
      <ArticleOutlined/> <span>News</span>
      </div>
      <div className={classes.item}>
      <LiveTvOutlined/> <span>Live</span>
      </div>
      <hr className={classes.hr} />
      <div className={classes.item}>
      <SettingsOutlined/> <span>Settings</span>
      </div>
      <div className={classes.item}>
      <FlagOutlined/> <span>Report</span>
      </div>
      <div className={classes.item}>
      <HelpOutlineOutlined/> <span>Help</span>
      </div>
      <div className={classes.item}>
      <SettingsBrightnessOutlined/> <span>LightMode</span>
      </div>
      </div>
    </div>
  )
}

export default Menu
