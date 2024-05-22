import ShareButton from "../ShareButton"
import "./index.css"

const TopSection = () => (
    <div className="vibe-page-top-bg-img">
        <div className="top-sec-content">
            <p className="top-text">#HomeHunts</p>
            <ShareButton title={"Furrl has a #Vibe for just about any occasion, trend or need! Check out this cool #Vibe, #HomeHunts on Furrl."}
            url={'https://web.furrl.in/vibeList?vibe=HomeHunts '}/>
        </div>
    </div>
)


export default TopSection; 