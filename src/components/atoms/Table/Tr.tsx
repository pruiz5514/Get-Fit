interface ITrProps{
    children: React.ReactNode
}

const Tr: React.FC<ITrProps> = ({children}) => {
  return (
    <tr className="w-full">
        {children}
    </tr>
  )
}

export default Tr