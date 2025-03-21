import { ReactNode, useEffect } from "react"

interface IModalProps{
  children: ReactNode
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 z-50 flex justify-center items-center px-[30px] py-[50px] bg-bgModal backdrop-blur-md">
      {children}
    </div>
  );
};

export default Modal