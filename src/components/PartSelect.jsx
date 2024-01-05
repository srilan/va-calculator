import { useState } from "preact/hooks"
import { Down } from "../assets"
import PartOption from "./PartOption"

const PartSelect = ({part, setPart, partDisplay, setPartDisplay}) => {
  const [hovered, setHovered] = useState(false)
  const highlight = {fill : '#b52d38'}

  // Onclick callback to change the highlighted body part.
  const partClick = (partStr) => {
    let newParts = part;
    let display = 'Others';

    // Reseting every part to false
    for (const [key, value] of Object.entries(newParts)) {
      newParts[key] = false;
    }

    switch (partStr) {
      case 'head':
        newParts.head = true
        display = 'Head';
        break;
      case 'larm':
        newParts.larm = true
        display = 'Left Arm';
        break;
      case 'rarm':
        newParts.rarm = true
        display = 'Right Arm';
        break;
      case 'torso':
        newParts.torso = true
        display = 'Torso';
        break;
      case 'lleg':
        newParts.lleg = true
        display = 'Left Leg';
        break;
      case 'rleg':
        newParts.rleg = true
        display = 'Right Leg';
        break;
      default:
        display = 'Others'
        break;
    }

    setPart(newParts)
    setPartDisplay(display)
    setHovered(false)
  }
  // Get the Full word of body part (display purposes)


  return (
    <>
      {/* <div class='p-5 w-full flex flex-col items-center'
      >
      </div> */}
     <div class='w-2/3 relative pt-3'
        onMouseEnter={() => {setHovered(true)}}
        onMouseLeave={() => {setHovered(false)}}
     >
      <div className="flex min-w-[130px] justify-between ps-4 pe-3 pt-1.5 py-1 bg-[#184997] mt-2 w-full text-white bebas md:text-xl lg:text-2xl rounded-tl-xl rounded-br-xl"
          >
            <span class='pe-2 none tracking-wide'> {partDisplay} </span>
            <img src={Down} alt="Arrow" class='w-4' />
          </div>
          {
            hovered && (
              <div class='bg-white w-full py-3 ps-4 pe-2 absolute border-2 border-[#184997]'>
                <PartOption text="Head" pclickEvent={() => { partClick('head')}}/>
                <PartOption text="Left Arm" pclickEvent={() => { partClick('larm')}}/>
                <PartOption text="Right Arm" pclickEvent={() => { partClick('rarm')}}/>
                <PartOption text="Torso" pclickEvent={() => { partClick('torso')}}/>
                <PartOption text="Left Leg" pclickEvent={() => { partClick('lleg')}}/>
                <PartOption text="Right Leg" pclickEvent={() => { partClick('rleg')}}/>  
                <PartOption text="Others" pclickEvent={() => { partClick('others')}}/>     
              </div>
            )
          }
     </div>


        <div class='my-4'>
          <svg id="body"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.52 360.93" className="w-36">

            <path id="Torso" class="cls-2" d="M614.06,264.78c.18-1.67.25-3.81.38-6.11-3.52-6-5.58-14.13-5.24-23.55a51.3,51.3,0,0,1,3.1-16c-4.74-1.6-9.13-4.21-13.55-6.64a3,3,0,0,1-.46-.3,26.07,26.07,0,0,1-29.43-.18.47.47,0,0,1-.1.1c-3.37,3-7.91,5-12.34,6.5a51.23,51.23,0,0,1,2.46,17.9c-.33,9.07-2.82,17-6.54,22.72a44,44,0,0,1,1.21,9.74c.34,10.35,4.68,20.28,2,31.05-1.77,7-1.1,14.55-2.24,21.74a22.13,22.13,0,0,1,4.83-.53c13.79,0,25,12.65,25,28.25,0,.2,0,.41,0,.61,0-.05,0-.11,0-.16l1,.06c.1.23.24.45.34.67,0-.39,0-.79,0-1.18,0-15.6,11.18-28.25,25-28.25a22.92,22.92,0,0,1,4.48.46,139.16,139.16,0,0,1-1.78-19.78c0-7-1.76-14-.1-21.21C613.2,275.49,613.49,270.09,614.06,264.78Z" transform="translate(-495.77 -161.37)" style={(part.torso ? highlight: {})} onClick={() => { partClick('torso')}}/>

            <path id="Head" class="cls-2" d="M602.27,185.9c-.12-1.08-1.6-2-3.15-3.85-.06-12.24-5.4-19.73-15.15-19.68a16.1,16.1,0,0,0-11.5,4.39c-4.85,4.66-4.63,10.69-4.66,15.54-1.55,1.51-3.06,2.27-3.24,3.28-.75,4.07,2.54,10.35,5.45,11.21.39,2,1.29,4.1,1.06,6-.4,3.35-.44,7.76-2.48,9.68a26.11,26.11,0,0,0,29.41.17h0a5.45,5.45,0,0,1-1.85-3.41c-.28-4.14-.1-8.31-.1-12.27C599.86,195.9,602.76,190.54,602.27,185.9Z" transform="translate(-495.77 -161.37)" style={(part.head ? highlight: {})} onClick={() => { partClick('head')}}/>

            <path id="LArm" class="cls-2" d="M552.66,259.85h0c3.72-5.73,6.21-13.65,6.54-22.72a51.51,51.51,0,0,0-2.42-17.77l-.68.23c-13,4.22-19.17,12-19.76,25.79-.34,7.75-.72,15.42-4.84,22.53-3.43,5.91-7,12.11-8.61,18.64-5.59,22.82-15.43,44.12-22.47,66.4-1.71,5.4-2.36,11.14-3.5,16.72l1.51.53c2.33-2.25,4.67-4.44,5.44-7.94.73-3.33,1.2-6.81,2.55-9.89s3.6-5.66,5.71-8.85a16.43,16.43,0,0,0,1.54,2.09c1.35,1.15,2.74,2.24,4.12,3.36.17-1.71.75-3.5.45-5.12-2.11-11.59-1.61-14,5.75-23.65,2.32-3,5.09-5.78,7.12-9A149.87,149.87,0,0,0,540.24,295c2.81-6,5-12.28,7.33-18.46,1.5-3.91,2.95-7.83,4.25-11.8A31.62,31.62,0,0,0,552.66,259.85Z" transform="translate(-495.77 -161.37)"
            style={(part.larm ? highlight: {})} onClick={() => { partClick('larm')}} />

            <path id="LLeg" class="cls-2" d="M583.39,349.54s0,.11,0,.16c0-.2,0-.41,0-.61,0-15.6-11.19-28.25-25-28.25a22,22,0,0,0-4.82.53l0-.24-.09.61c-4,23.93-4.93,47.62,2.77,71.12a47.1,47.1,0,0,1,.52,26.45,37.74,37.74,0,0,0-1,10.6c.49,13.11,4,25.65,7.82,38.1,2.08,6.78,3.36,13.51,2.07,20.69-1.4,7.78-2.4,15.55-7.89,21.88-1.59,1.83-2.36,4.35-3.48,6.51,3.49,2.95,11.24,5,15.18,3.93a5.48,5.48,0,0,0,2.33-1.79c3.19-3.56,2-9.54,6.77-12.29.28-.16.29-1,.29-1.45,0-4.7.61-9.53-.27-14.07-2.08-10.72-.69-21.37-.36-32.05.21-7,1.66-14.4,0-21-2.74-10.73-.66-20.51.89-31,2.63-17.73,2.75-35.83,3.93-53.78.09-1.35.22-2.71.33-4.06Z" transform="translate(-495.77 -161.37)" style={(part.lleg ? highlight: {})} onClick={() => { partClick('lleg')}}/>
          
            <path id="RLeg" class="cls-2" d="M617.56,348.39c-.36-9.4-2.1-18.6-3.45-27.86,0,.26.07.52.1.77a22.92,22.92,0,0,0-4.48-.46c-13.8,0-25,12.65-25,28.25,0,.35,0,.7,0,1.05a1,1,0,0,1,.11.35c.94,15.8,1.67,31.61,2.89,47.39A102,102,0,0,0,591,416.21a29.17,29.17,0,0,1,.48,13.92c-1,4.95-2.21,10-2,15,.68,19.73,1.53,39.44-.22,59.16-.14,1.55,1.4,3.27,2.2,4.88.65,1.32,1.4,2.59,2.05,3.91,1.14,2.34,1.91,5,3.53,6.91.67.82,3.09.18,4.71.24a7,7,0,0,1,1,.23c4.33.89,7.94-.45,11.38-3.51-6-8.88-11.48-17.76-11.63-28.64-.07-5.16-.21-10.46.81-15.47,1.73-8.47,4.74-16.68,6.51-25.14,1.94-9.34,4.12-18.81,1.55-28.41-2.53-9.41-2-18.6.83-27.88A131.27,131.27,0,0,0,617.56,348.39Z" transform="translate(-495.77 -161.37)" style={(part.rleg ? highlight: {})} onClick={() => { partClick('rleg')}}/>

            <path id="RArm" class="cls-2" d="M668,354.36c-3.65-11.34-7.85-22.52-11.9-33.74-2.24-6.22-5.06-12.26-6.83-18.61-2.71-9.68-5.18-19.27-10.22-28.24-3.39-6-7-12.47-6.92-20a56,56,0,0,0-.6-9.94c-2.42-14.49-7.34-20-18.56-23.59l-.4-.13a51.42,51.42,0,0,0-3.1,16c-.35,9.42,7.68,33.19,9.27,37.43,2.77,7.38,5.67,14.74,9,21.87A130.9,130.9,0,0,0,637,311.64c3.65,5.51,8,10.56,11.82,16,1.18,1.67,2.34,3.9,2.25,5.82-.23,4.37-1.3,8.7-1.86,13.07-.11.85.5,1.8.78,2.7,1-.32,2.26-.38,3-1a20.6,20.6,0,0,0,2.55-3.62c4.49,3.07,8.16,11.17,8.63,17,.33,4.05,3.34,8.08,7,8.59C670.06,364.75,669.64,359.36,668,354.36Z" transform="translate(-495.77 -161.37)" style={(part.rarm ? highlight: {})} onClick={() => { partClick('rarm')}} />
          </svg>
        </div>

    </>
  )
}

export default PartSelect