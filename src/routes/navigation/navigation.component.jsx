import { Fragment, useContext } from "react"
import { Outlet,Link  } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../../src/assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import {SignOutUser} from "../../../src/utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-icon/cart-dropdown.component";
import './navigation.styles.scss';



const Navigation=()=>{

  const { currentUser } = useContext(UserContext);

  const {isCartOpen}=useContext(CartContext)
  console.log(currentUser)

  const signOutHandler = async ()=>{
    const res = await SignOutUser();
    console.log(res)
    //setCurrentUser(null)
  }

    return(
      <>
       <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser?(
              <span className="nav-link" onClick={signOutHandler}>{' '}
              SIGN OUT{' '}</span>
              ) :(
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
              )
          }
         
            <CartIcon/>

        </div>
         {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
      </>
    )
  }

 export default Navigation 