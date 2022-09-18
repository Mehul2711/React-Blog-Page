interface type {
  heading: string;
}

const Headings = (props: type): JSX.Element => {
  return <div className="text-4xl py-14 font-bold">{props.heading}</div>;
};

export default Headings;
