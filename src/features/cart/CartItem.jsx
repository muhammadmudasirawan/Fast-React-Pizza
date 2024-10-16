
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './cartSlice';
import DeleteItem from './deleteItem';
import UpdataItemQuantity from './UpdataItemQuantity';



function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  console.log(currentQuantity);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">

        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

<UpdataItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />

       <DeleteItem  pizzaId={pizzaId } />
      </div>
    </li>
  );
}

export default CartItem;
