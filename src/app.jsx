import { useEffect, useState } from 'preact/hooks'
import { PartSelect } from './components'
import PercentSelect from './components/PercentSelect'
import RatingsBtn from './components/RatingsBtn'
5

export function App() {
  const [ratingId, setRatingId] = useState(1)
  const [disabilityRating, setDisabilityRating] = useState({
    bilateralFactor: undefined,
    calculatedRating: undefined,
    disabilityRating: undefined,
  });
  // State for parts to highligt in body diagram
  const [part, setPart] = useState({
    head: false,
    larm: false,
    rarm: false,
    torso: false,
    lleg: false,
    rleg: false
  });
  const [disabilityLoading, setDisabilityLoading] = useState(false);
  // State for current selected Body Part
  const [partDisplay, setPartDisplay] = useState('Others')

  // State for array of ratings selected to display
  const [ratings, setRatings] = useState([]);

  // function to add new ratings
  const ratingClicked = (rating, part,id) => {
    setRatings([ ...ratings, {rate: rating, part: part, id: id}])
  }

  useEffect(()=> {
    recalculate();
  }, [ratings])

  const recalculate = () => {
    let body = {
      head: [],
      torso: [],
      left_arm: [],
      right_arm: [],
      left_leg: [],
      right_leg: [],
      other: [],
    };

    ratings.forEach((elem) => {
      let thePart;
      /**
       * use json
       */
      switch(elem.part){
        case 'Head':
          thePart = 'head';
          break
        case 'Tosro':
          thePart = 'torso';
          break;
        case 'Left Arm':
          thePart = 'left_arm'
          break;
        case 'Right Arm':
          thePart = 'right_arm'
          break;
        case 'Left Leg':
          thePart = 'left_leg';
          break;
        case 'Right Leg':
          thePart = 'right_leg';
          break;
        default:
          thePart = 'other';
      }

      body[thePart].push(elem.rate);
    })
<<<<<<< HEAD

    setDisabilityLoading(true);

=======
    setDisabilityLoading(true);
>>>>>>> spike/preact
    fetch('https://va-calc-be.onrender.com/calculator/disability-rating', {
      method: 'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body),
    }).then((r)=>r.json()).then((res)=> {
      setDisabilityRating(res);
    }).finally(()=> {
      setDisabilityLoading(false);
    })
    return body
  }
  
  // Remove rating
  const removeRating = (id) => {
    let newRates = ratings.filter((item)=> item.id != id);
    setRatings(newRates)
  }
  
  return (
    <>
      <div class='w-full bg-black text-white p-3'>
        *NavBar here*
      </div>

      <div class='flex flex-col w-full bg-white h-full py-12 px-10'>

        <div className='flex flex-col lg:flex-row'>
          
          {/* Instruction Block */}
          <div class='pt-10 pb-[60px] lg:pe-[45px] ps-10 lg:pt-5 bg-slate-200 sm:w-full lg:w-2/6 flex flex-col relative lg:border-r-2 border-[#184997] gap-10 justify-center'>

            <div class='absolute bottom-0 right-2/4 translate-x-2/4 lg:translate-x-0 lg:bottom-auto lg:right-[-18px] lg:top-2/4 bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 lg:rotate-[270deg] text-white rounded-t-xl tracking-wider'>
              STEP 1
            </div>
              <span class='bebas text-4xl'>
                BEGIN BY CHOOSING THE AREAS <span class='text-[#b52d38]'> WHERE YOU HAVE DISABILITIES </span>
              </span>

              <span class='mont text-lg font-medium pe-10'>
              Choose the specific body part affected by your disability and indicate the percentage of impairment from 0% to 100%.
              </span>
          </div>

          {/* Diagram and Percent Buttons */}
          <div class='w-full lg:w-2/4 flex flex-col sm:flex-row justify-evenly relative border-2 border-[#184997]'>
            <div class='border-1 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center'>
              <PartSelect part={part} setPart={setPart} partDisplay={partDisplay} setPartDisplay={setPartDisplay} />
            </div>

            <div class=' w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center text-white justify-center' >
              <PercentSelect btnRatingClick={ratingClicked} bodyPart={partDisplay} id={ratingId} setRatingId={setRatingId} />
            </div>
          </div>

          <div class='lg:w-1/4 flex flex-col p-5 bg-slate-300 items-center' >
  
              <div class='flex flex-col w-full items-center border-b-2 border-slate-500 pb-3'>
                <div class='text-3xl bebas'>
                  Total Disablity Rating
                </div>
                 {/* Radial Progress Bar */}
                <div class="relative w-32 h-32">
                  <svg class="w-full h-full" viewBox="0 0 100 100">

                    <circle
                      class="text-gray-200 stroke-current"
                      stroke-width="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>

                    <circle
                      class="text-[#b52d38]  progress-ring__circle stroke-current"
                      stroke-width="10"
                      stroke-linecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
<<<<<<< HEAD
                      stroke-dashoffset={"calc(400 - ("+ disabilityRating.disabilityRating/10 * 40 +" * 65) / 100)"}
                    ></circle>
                    {/* Change increments by 40. (the 200 one) */}
=======
                      stroke-dashoffset="calc(250)"
                    ></circle>
                  
>>>>>>> spike/preact
                    {disabilityLoading ? (
                      <>Loading</>
                    ):(
                      <text 
                      x="50" 
                      y="50" 
                      font-size="32" 
                      text-anchor="middle" 
                      alignment-baseline="middle" 
                      class='bebas'>
<<<<<<< HEAD
                        {disabilityRating.calculatedRating?disabilityRating.disabilityRating+'':'0'}%
=======
                        {disabilityRating.calculatedRating?disabilityRating.calculatedRating:''}
>>>>>>> spike/preact
                    </text>
                    )}
                  </svg>
                </div>
              </div>

              <div class='bebas text-2xl mt-4'>
                Total Monthly Compensation
              </div>

              <div class='text-xl mont'>
                $ 4,365.60
              </div>

          </div>
        </div>

        {/* Ratings Section */}
        <div className='flex w-full justify-center mt-6'>
          <div className='w-full border-[#184997] bg-white lg:ps-20 lg:pt-5 pt-16 pb-2 pe-3 relative text-white' id='percContainer' style={{borderWidth: '2px'}}>
            <div class='top-0 left-0 w-full h-[40px] lg:h-full bg-[#184997] align-middle p-2 lg:w-[70px] text-center text-sm font-semibold text-white flex justify-center items-center mont absolute'>
              Ratings
            </div>
            <div class=''>
              {
                ratings.map((item)=> <RatingsBtn elem={item} removeMe={removeRating} />)
              }
              {
                (ratings.length == 0) && (
                  <div class='opacity-0 pointer-events-none'>
                    <RatingsBtn elem={{part:'',rate: 0, id:0}} removeMe={removeRating}/>
                  </div>
                )
              }
            </div>
            
          </div>
        </div>
        
      </div>
      
    </>   
  )
}
