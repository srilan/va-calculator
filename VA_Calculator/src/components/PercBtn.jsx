const PercBtn = (props) => {

  const {rate, bodyPart, clickFunc, id,setRatingId} = props;

  return (
    <button className='border-2 text-black w-[100px] h-[50px] transition-all bg-transparent border-[#184997] btnHov'
    //onClick={() => {clickFunc(rate,bodyPart,id); setRatingId(++id)}}>
    onClick={() => {
      const newId = id + 1;
      clickFunc(rate, bodyPart, id);
      setRatingId(newId);
    }}>
        <span className='bebas text-3xl text-[#184997]'> {rate}% </span>
    </button>
  )
}

export default PercBtn