import { useState } from 'react'
import Cart from './Cart.tsx'
import { RootState, useCartSelector } from '../store/store.ts'

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const cart = useCartSelector((state: RootState) => state.cart.items)

  function handleOpenCartClick() {
    setCartIsVisible(true)
  }

  function handleCloseCartClick() {
    setCartIsVisible(false)
  }

  const totalQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0) ?? 0

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id='main-header'>
        <div id='main-title'>
          <img src='logo.png' alt='Elegant model' />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {totalQuantity}</button>
        </p>
      </header>
    </>
  )
}
