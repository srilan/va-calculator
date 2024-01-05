import PercBtn from "./PercBtn"

const PercentSelect = ({btnRatingClick, bodyPart}) => {

  return (
    <>
    <div class='p-3 flex flex-col gap-4'>
        <div className="flex gap-6">
            <PercBtn bodyPart={bodyPart} rate={10} clickFunc={btnRatingClick} />
            <PercBtn bodyPart={bodyPart} rate={20} clickFunc={btnRatingClick} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={30} />
            <PercBtn rate={40} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={50} />
            <PercBtn rate={60} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={70} />
            <PercBtn rate={80} />
        </div>

        <div className="flex gap-6">
            <PercBtn rate={90} />
            <PercBtn rate={100} />
        </div>

    </div>
    </>
  )
}

export default PercentSelect