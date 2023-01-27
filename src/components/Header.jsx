import { HashLink } from 'react-router-hash-link'
import React from 'react'
import '../styles/header.scss'
import { cart } from '../Context/Context'
import { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = ({ children }) => {

  const refreshPage = () => {
    window.location.reload()
  }
  const GlobalState = useContext(cart)
  const state = GlobalState.state
  const dispatch = GlobalState.dispatch


  return (




    <div className='Maindiv'>
    

      <nav>


        <h1 onClick={refreshPage}>ShopMe.com</h1>
        <main>

          <HashLink to="/">Shop</HashLink>
          <HashLink to="/cart">
          <ShoppingCartIcon/>
            <sup id='sup'>
              {state.length}
            </sup>
          </HashLink>
          <HashLink to='/signup'>Sign-Up</HashLink>
          <HashLink to='/#footer'>About us</HashLink>



        </main>
      </nav>

    </div>

  )

}

export default Header




