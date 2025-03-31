import ExerciseTable from './ExerciseTable'
import ExerciseSerieForm from './Forms/ExerciseSerieForm'

interface IStartExerciseContainer{
  
}

const StartExerciseContainer = () => {
  return (
    <div  className='w-full h-auto py-6 bg-charcoal px-4 rounded-lg'>
        <div className='w-full flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrgsa1rAzssokDBoj9eSnx1JxUfLnWq_WjA&s" alt="" />
            <h3 className='text-lightGray text-2xl capitalize'> Rutina</h3>
        </div>
        <div className='w-full mt-6'>
            <ExerciseTable/>
        </div>
        <div className='mt-6'>
            <ExerciseSerieForm/>
        </div>
    </div>
  )
}

export default StartExerciseContainer