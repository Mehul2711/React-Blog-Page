import FooterIcons from "./FooterIcons";
import Discord from "../../Assets/Svg/discord.svg";
import Typescript from "../../Assets/Svg/typescript.svg";
import Github from "../../Assets/Svg/github.svg";

const Footer = (): JSX.Element => {
  return (
    <div className="text-white min-h-[100px] w-full mt-10 bg-[#012a4a] flex justify-evenly items-center flex-col md:flex-row">
      <FooterIcons
        svg={Discord}
        label="Discord"
        href="https://discord.com/invite/reactiflux"
      />
      <FooterIcons
        svg={Typescript}
        label="React Community"
        href="https://reactjs.org/community/support.html"
      />
      <FooterIcons
        svg={Github}
        label="React Docs"
        href="https://reactjs.org/docs/getting-started.html"
      />
    </div>
  );
};

export default Footer;
