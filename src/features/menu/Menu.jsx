import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiProduct';

import MenuItem from './MenuItem';
import CartOverview from '../cart/CartOverview';

function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <ul className="m-4 space-y-1 divide-y divide-stone-300">
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>

      <CartOverview />
    </div>
  );
}

export async function Loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
