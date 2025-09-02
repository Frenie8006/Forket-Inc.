import { Link } from 'react-router-dom';

function Button({ children, type = 'primary', to, onClick }) {
  const base =
    " 'uppercase text-xs bg-amber-400 text-white font-semibold  rounded-full hover:bg-amber-500  duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2',";

  const style = {
    primary: base + ' px-6 py-3 sm:text-sm',
    secondary: base + ' px-3 py-2 sm:text-xs',
    small:
      'text-xs bg-amber-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-amber-500  duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2',
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
