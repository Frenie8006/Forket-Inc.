import { Link } from 'react-router-dom';

function Button({ children, type = 'primary', to, onClick, disabled }) {
  const base =
    " 'uppercase text-xs bg-amber-400 text-stone-800 font-semibold  rounded-full hover:bg-amber-500  duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2',";

  const style = {
    primary: base + ' px-6 py-3 sm:text-sm',
    secondary: base + ' px-3 py-2 sm:text-xs',
    tertiary:
      'inline-block text-sm px-4 py-2.5 md:px-6 md:py-3.5  rounded-full border-2 border-stone-300  font-semibold uppercase tracking-wide focus:text-stone-800 text-stone-400 transition-colors hover:text-stone-800 duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2',
    small:
      'text-xs bg-amber-400 text-stone-800 font-semibold px-4 py-2 rounded-full hover:bg-amber-500  duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2',
  };

  if (onClick)
    return (
      <button onClick={onClick} className={style[type]}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
