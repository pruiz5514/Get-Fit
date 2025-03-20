interface IMuscleSelectProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>)=> void
}

const MuscleSelect: React.FC<IMuscleSelectProps> = ({onChange}) => {
  return (
    <select onChange={onChange} name="muscle-select" id="muscle-select" className="px-3 py-2 bg-darkGrey rounded-lg text-lightGray  text-xl">
        <option value="back" selected>Espalda</option>
        <option value="chest">Pecho</option>
        <option value="cardio">Cardio</option>
        <option value="lower arms">Brazo inferior</option>
        <option value="lower legs">Pierna inferior</option>
        <option value="neck">Cuello</option>
        <option value="shoulders">Hombro</option>
        <option value="upper arms">Brazo superior</option>
        <option value="upper legs">Pierna superior</option>
        <option value="waist">Cintura</option>
    </select>
  )
}

export default MuscleSelect