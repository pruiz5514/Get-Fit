interface ITdProps{
    children: React.ReactNode
}

const Td: React.FC<ITdProps> = ({children}) => {
  return (
    <td className="w-1/3 text-start text-lightGray text-lg py-1">
        {children}
    </td>
  )
}

export default Td