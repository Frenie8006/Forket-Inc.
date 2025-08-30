import { Link } from 'react-router-dom';

function Button({ children, type = 'primary', to }) {
  const style = {
    primary:
      'uppercase text-xs sm:text-sm bg-amber-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-500  duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2',
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  return <button className={style[type]}>{children}</button>;
}

export default Button;
