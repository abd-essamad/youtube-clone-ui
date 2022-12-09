import classes from './feed.module.css'
import thumbnails from '../../assets/nt.PNG'
import chennelImg from '../../assets/apple-touch-icon.png'
import { CheckCircle, FiberManualRecord } from '@mui/icons-material'
const Feed = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper} >
      <div className={classes.videoCard}>
      <img src={thumbnails} alt="" className={classes.thumbnail} />
      <div className={classes.detailVideo}>
      <img src={chennelImg} alt="" className={classes.channel} />
      <div className={classes.rightSideDetail}>
      <div className={classes.channelName}>
      <h4>Web3 media</h4>
      <CheckCircle className={classes.checkIcon}/>
      </div>
      <div className={classes.viewsAndTime}>
      <span className={classes.views} >3.7k views</span>
      <FiberManualRecord className={classes.dotIcon} />
      <span className={classes.time} >2 hours ago</span>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Feed
