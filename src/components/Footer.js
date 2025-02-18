import { TbBrandGmail, TbBrandGithub, TbBook } from "react-icons/tb";
import { WiTrain } from "react-icons/wi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="text-md leading-3 px-10 py-4 border-t bg-base-200 text-base-content
        border-t-0 mt-0 border-gray-800 flex justify-between items-center w-full"
      >
        <div className="flex justify-start items-center">
          <span>
            <WiTrain className="w-12 h-12 transition-transform duration-500 ease-in-out transform -translate-x-5 hover:translate-x-2 z-[-999]" />
          </span>
          <div className="flex flex-col gap-2 items-start justify-center ml-2">
            <p>Meri Rail</p>
            <p>&copy; Mohit Prajapat 2025</p>
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-end items-center gap-3 text-xl">
          <Link target="_blank" to="mailto:mohit.prajapati@trootech.com">
            <TbBrandGmail className="text-gray-400 hover:text-gray-50 transition duration-500 ease-in-out hover:scale-110" />
          </Link>
          <Link target="_blank" to="https://github.com/mohitprajapat2001">
            <TbBrandGithub className="text-gray-400 hover:text-gray-50 transition duration-500 ease-in-out hover:scale-110" />
          </Link>
          <Link target="_blank" to="/docs">
            <TbBook className="text-gray-400 hover:text-gray-50 transition duration-500 ease-in-out hover:scale-110" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
