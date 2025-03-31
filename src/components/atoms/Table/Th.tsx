interface IThProps{
    children: React.ReactNode
}

const Th: React.FC<IThProps> = ({children}) => {
  return (
    <th className="w-1/3 text-xl text-lightGray font-medium text-start py-1" >
        {children}
    </th>
  )
}

export default Th