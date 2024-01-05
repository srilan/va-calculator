
const PercBtn = ({bodyPart, rate, clickFunc, id, setRatingId}) => {

  return (
    <button class='border-2 text-black w-[100px] h-[50px] transition-all bg-transparent border-[#184997] btnHov'
    onClick={() => {clickFunc(rate,bodyPart,id); setRatingId(++id)}}>
        <span class='bebas text-3xl text-[#184997]'> {rate}% </span>
    </button>
  )
}

export default PercBtn