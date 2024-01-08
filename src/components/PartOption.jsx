
const PartOption = ({text, pclickEvent}) => {

  return (
    <>   
        <div class='w-full inline-block bebas text-[#011936] text-xl hover:text-red-700 cursor-pointer'
        onClick={pclickEvent}
        > 
        {text} 
        </div>
    </>
  )
}

export default PartOption