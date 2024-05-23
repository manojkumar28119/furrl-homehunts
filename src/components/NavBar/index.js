import "./index.css"

const Header = () => (
    <nav className="navBar"> 
        <img src="https://furrl.in/_next/static/media/Menu.b5bc5303.svg" width="24" height="24" alt="banner" />       
        <a className="furrlVibe" href="https://web.furrl.in/home?ref=appbar-page-vibeResults">
            <img src="https://web.furrl.in/_next/static/media/Furrl.13550a62.svg" alt="icon"/>
        </a>
        <div className="navIcons">
            <a href="https://furrl.in/wishlist" >
                <img  alt="WishListIcon"   width="22" height="22"  
                className="WishListIcon" src="	https://web.furrl.in/_next/static/media/Whislist.2ac94d87.svg"/>
            </a>
            <a href="https://furrl.in/cart">
                <img  alt="BagIcon"   width="22" height="22"  
                className="BagIcon" src="https://web.furrl.in/_next/static/media/Bag.b94fa005.svg"/>
            </a>
        </div>
    </nav>
)


export default Header;


 