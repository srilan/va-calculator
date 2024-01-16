
import PercBtn from "./PercBtn"

const PercentSelect = (props) => {


  return (
    <>
    <div className='p-3 flex flex-col gap-4'>
        <div className="flex gap-6">
            <PercBtn bodyPart={props.bodyPart} rate={10} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
            <PercBtn bodyPart={props.bodyPart} rate={20} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={30} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
            <PercBtn rate={40} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={50} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
            <PercBtn rate={60} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={70} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
            <PercBtn rate={80} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={90} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
            <PercBtn rate={100} bodyPart={props.bodyPart} clickFunc={props.btnRatingClick} id={props.id} setRatingId={props.setRatingId} />
        </div>

    </div>
    </>
  )
}

export default PercentSelect