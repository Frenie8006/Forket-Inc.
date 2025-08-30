import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiProduct';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="m-4 space-y-1 divide-y divide-stone-300">
      {menu.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function Loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
