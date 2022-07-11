import Button from '../button/button.component'
import './cart-dropdown.style.scss'

const CartDropdown=()=>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Button>Go to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown