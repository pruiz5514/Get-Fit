import Button from "../../atoms/Button"

const ExerciseSerieForm = () => {
  return (
    <form className="w-full flex flex-col gap-5" >
        <div className='w-full flex gap-2'>
            <input type="text" placeholder='Peso (kg)' className='w-1/2 bg-[#555555] p-2 rounded-lg text-lg text-[#CCCCCC]'/>
            <input type="text" placeholder='Repeticiones' className='w-1/2 bg-[#555555] px-2 py-1 rounded-lg text-lg text-[#CCCCCC]'/>
        </div>

        <Button>Agregar serie</Button>
    </form>
  )
}

export default ExerciseSerieForm