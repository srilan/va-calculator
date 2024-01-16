

import {Close} from '../assets'

const RatingsBtn = (props) => {

  return (
    <>
        <button className='ms-3 bg-whute text-sm ratings relative' style={{border: '1px solid', borderColor: '#575757'}}
        onClick={ ()=>{props.removeMe(props.elem.id)}}> 
            <span className='block text-xs'>
            <span className='inline-block py-1.5 px-4 text-sm mont text-black font-bold'> {props.elem.rate}% - {props.elem.part} </span>  
            </span>
            <div className='absolute thrash bg-[#ffffff] rounded-full p-1' style={{borderColor: '#b52d38', borderWidth:'1px' }}>
                <img src={Close} alt="" srcset="" />
            </div>
        </button>
    </>
  )
}

export default RatingsBtn