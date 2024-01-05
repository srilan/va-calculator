import { useState } from 'preact/hooks'
import { PartSelect } from './components'
import PercentSelect from './components/PercentSelect'
import RatingsBtn from './components/RatingsBtn'

export function App() {
  const [ratingId, setRatingId] = useState(1)
  // State for parts to highligt in body diagram
  const [part, setPart] = useState({
    head: false,
    larm: false,
    rarm: false,
    torso: false,
    lleg: false,
    rleg: false
  });
  // State for current selected Body Part
  const [partDisplay, setPartDisplay] = useState('Others')

  // State for array of ratings selected to display
  const [ratings, setRatings] = useState([]);

  // function to add new ratings
  const ratingClicked = (rating, part,id) => {
    setRatings([ ...ratings, {rate: rating, part: part, id: id}])
  }
  
  // Remove rating
  const removeRating = (id) => {
    let newRates = ratings.filter((item)=> item.id != id);
    setRatings(newRates)
  }

  console.log(ratings)
  
  return (
    <>
      <div class='w-full bg-black text-white p-3'>
        *NavBar here*
      </div>

      <div class='flex flex-col w-full bg-white h-full py-12 px-5'>

        <div className='flex'>
          <div class='w-3/4 flex justify-center border-cyan-100'>
            <div class='border-1 border-cyan-100 w-1/3 flex flex-col items-center'>
              <PartSelect part={part} setPart={setPart} partDisplay={partDisplay} setPartDisplay={setPartDisplay} />
            </div>

            <div class=' w-1/3 flex flex-col items-center text-white justify-center' >
              <PercentSelect btnRatingClick={ratingClicked} bodyPart={partDisplay} id={ratingId} setRatingId={setRatingId} />
            </div>
          </div>

          <div class='md:w-1/3 flex flex-col p-5 bg-slate-300 items-center' >
  
              <div class='flex flex-col w-full items-center border-b-2 border-slate-500 pb-3'>
                <div class='text-3xl bebas'>
                  Total Disablity Rating
                </div>
                 {/* Radial Progress Bar */}
                <div class="relative w-40 h-40">
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
                      stroke-dashoffset="calc(400 - (400 * 45) / 100)"
                    ></circle>
                  
                    <text x="50" y="50" font-size="32" text-anchor="middle" alignment-baseline="middle" class='bebas'>70%</text>

                  </svg>
                </div>
              </div>

              <div className='bebas text-3xl mt-4'>
                Total Monthly Compensation
              </div>

              <div class='text-2xl mont mt-2'>
                $ 4,365.60
              </div>

          </div>
        </div>

        {}
        <div className='flex w-full justify-center mt-6'>
          <div className='w-full border-[#184997] bg-white ps-20 pt-3 pb-2 pe-3 relative text-white' id='percContainer' style={{borderWidth: '2px'}}>
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
