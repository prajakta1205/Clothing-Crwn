import { Fragment, useContext } from "react"
import { Outlet,Link  } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { UserContext } from "../../context/user.component";
import {SignOutUser} from "../../../utils/firebase/firebase.utils"

import './navigation.styles.scss';



const Navigation=()=>{

  const { currentUser,setCurrentUser } = useContext(UserContext);
  console.log(currentUser)

  const signOutHandler = async ()=>{
    const res = await SignOutUser();
    console.log(res)
    setCurrentUser(null)
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
        </div>
      </div>
      <Outlet />
      </>
    )
  }

 export default Navigation 