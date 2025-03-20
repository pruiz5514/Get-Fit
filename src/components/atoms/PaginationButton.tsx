import { ReactNode } from "react"

interface IPaginationButtonProps{
    children: ReactNode;
    onClick: ()=> void
}

const PaginationButton: React.FC<IPaginationButtonProps> = ({children, onClick}) => {
  return (
        <button onClick={onClick} className="bg-charcoal p-2 text-lightGray rounded-lg cursor-pointer">{children}</button>
  )
}

export default PaginationButton