import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PaginationButton from '../atoms/PaginationButton'
import { IExerciseDBResponse } from '../../App/core/application/dto/excersiceDB/exerciseDB-response.dto'
import { useSearchParams } from 'react-router-dom'

interface IPaginationProps{
    data:IExerciseDBResponse[]
}

const Pagination:React.FC<IPaginationProps> = ({data}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = Number(searchParams.get("offset"))
  
  const handleBack = () =>{
    setSearchParams({offset: (offset - 20).toString()}) 
  }

  const handleNext = () =>{
    setSearchParams({offset: (offset + 20).toString()}) 
  }

  return (
    <div className='flex gap-8'>
        {
            offset > 0 && (
                <div className="flex items-center gap-3">
                    <PaginationButton onClick={handleBack}> <FaChevronLeft /> </PaginationButton>
                    <span className='text-lightGray'>Anterior</span>
                </div>
            ) 
        }
       
        {
            data.length === 20 && (
                <div className="flex items-center gap-3">
                    <span className='text-lightGray'>Siguiente</span>
                    <PaginationButton onClick={handleNext}> <FaChevronRight /> </PaginationButton>
                </div>
            )
        }
       
    </div>
  )
}

export default Pagination