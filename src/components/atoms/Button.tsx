interface IButtonProps{
    children: React.ReactNode
}

const Button:React.FC<IButtonProps> = ({children}) => {
  return (
    <button className="bg-softElectricBlue text-white px-3 py-2 rounded-lg cursor-pointer"> {children} </button>
  )
}

export default Button