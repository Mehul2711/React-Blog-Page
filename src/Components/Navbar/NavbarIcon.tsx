interface type {
  href: string;
  icon: Function;
}

const NavbarIcon = (props: type): JSX.Element => {
  return (
    <li className="px-2 md:px-4 text-2xl">
      <a href={props.href}>
        <props.icon />
      </a>
    </li>
  );
};

export default NavbarIcon;
