

const PartOption = (props) => {

  return (
    <>   
        <div className='w-full inline-block bebas text-[#011936] text-xl hover:text-red-700 cursor-pointer'
        onClick={props.pclickEvent}
        > 
        {props.text} 
        </div>
    </>
  )
}

export default PartOption