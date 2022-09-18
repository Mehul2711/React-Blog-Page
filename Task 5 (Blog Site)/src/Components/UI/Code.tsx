const Code = (props: { code: string }): JSX.Element => {
  return (
    <div className="bg-[#012a4a] text-white w-full px-10 py-5 flex justify-center items-center">
      {props.code}
    </div>
  );
};

export default Code;
