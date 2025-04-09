import { Static } from "../../assets/images";

const Logo = () => {
  return (
    <div>
      <img className="max-h-[30px]" src={Static.bankLogo} alt="Bankvic Logo" />
    </div>
  );
};

export default Logo;
