import React from 'react'

const RatingsBtn = ({elem, removeMe}) => {
    console.log(elem)
  return (
    <>
        <button class='ms-3 bg-black text-sm rounded-r-lg min-w-[150px]' style={{border: '1px solid', borderColor: '#575757'}}
        onClick={()=>{removeMe(elem.id)}}> 
            <span class='block text-xs'>
            <span class='inline-block py-1.5 ps-2.5 pe-2 text-sm'> {elem.rate}% - {elem.part} </span>  
            <span class='inline-block border-l-[#575757] py-1.5 px-2.5'
                style={{borderLeft: '1px solid'}}>
                X 
            </span>
            </span>
        </button>
    </>
  )
}

export default RatingsBtn