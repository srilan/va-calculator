
const PercBtn = ({bodyPart, rate, clickFunc}) => {

  return (
    <button class='border-2 text-black w-[100px] h-[50px] transition-all bg-transparent border-[#82A3A1] btnHov'
    onClick={() => clickFunc(rate,bodyPart)}>
        <span class='bebas text-3xl text-[#82A3A1]'> {rate}% </span>
    </button>
  )
}

export default PercBtn