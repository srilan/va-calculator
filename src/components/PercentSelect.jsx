import PercBtn from "./PercBtn"

const PercentSelect = ({btnRatingClick, bodyPart, id, setRatingId}) => {


  return (
    <>
    <div class='p-3 flex flex-col gap-4'>
        <div className="flex gap-6">
            <PercBtn bodyPart={bodyPart} rate={10} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
            <PercBtn bodyPart={bodyPart} rate={20} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={30} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
            <PercBtn rate={40} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={50} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
            <PercBtn rate={60} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={70} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
            <PercBtn rate={80} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={90} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
            <PercBtn rate={100} bodyPart={bodyPart} clickFunc={btnRatingClick} id={id} setRatingId={setRatingId} />
        </div>

    </div>
    </>
  )
}

export default PercentSelect