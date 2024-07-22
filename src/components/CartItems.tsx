import { useDispatch } from 'react-redux'
import { RootState, useCartSelector } from '../store/store'
import { addItem, CartItem, removeItem } from '../store/cart-slice'

export default function CartItems() {
  const { items } = useCartSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id))
  }

  const handleAddToCart = (item: CartItem) => {
    dispatch(addItem(item))
  }

  const formattedTotalPrice = `$${items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)}`

  return (
    <div id='cart'>
      <p>No items in cart!</p>

      <ul id='cart-items'>
        {items.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`
          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className='cart-item-actions'>
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          )
        })}
      </ul>

      <p id='cart-total-price'>
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  )
}
