function MenuItem({ item }) {
  return (
    <li>
      <img src={item.image} alt={item.title} />
    </li>
  );
}

export default MenuItem;
