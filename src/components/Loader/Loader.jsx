import s from "./Loader.module.css";
import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className={s.loader_wrapper}>
      <Audio
        textAlign="centre"
        height="80"
        width="80"
        radius="9"
        color=" #96eaff"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
