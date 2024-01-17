
const PercBtn = (props) => {

  return (
    <button className='border-2 text-black w-[100px] h-[50px] transition-all bg-transparent border-[#184997] btnHov'
    onClick={() => {clickFunc(props.rate,props.bodyPart,props.id); setRatingId(++props.id)}}>
        <span className='bebas text-3xl text-[#184997]'> {props.rate}% </span>
    </button>
  )
}

export default PercBtn