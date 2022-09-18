interface type {
  name: string;
}

const NavbarItem = (props: type): JSX.Element => {
  return (
    <li className="px-2 md:px-4">
      <a href="/">{props.name}</a>
    </li>
  );
};

export default NavbarItem;
