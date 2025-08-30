import Button from '../../ui/Button';

function MenuItem({ item }) {
  return (
    <li className="relative z-20 mx-auto flex w-2/3 flex-col items-center justify-center gap-4 overflow-hidden rounded bg-stone-100 p-4 text-center shadow-sm before:absolute before:left-0 before:top-0 before:z-10 before:h-1/2 before:w-full before:bg-sky-50 sm:flex-row sm:space-x-6 sm:border-b sm:text-left">
      <img src={item.image} alt={item.title} className="z-20 mb-4 w-20" />
      <div className="z-20 space-y-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="mb-2 text-sm font-light text-stone-600">
          {item.description}
        </p>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-semibold">${item.price}</p>
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
