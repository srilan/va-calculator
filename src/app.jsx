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

      <div class='flex flex-col w-full bg-[#011936] h-full py-12 px-5'>

        <div className='flex'>
          <div class='w-3/4 flex justify-center border-cyan-100'>
            <div class='border-1 border-cyan-100 w-1/3 flex flex-col items-center'>
              <PartSelect part={part} setPart={setPart} partDisplay={partDisplay} setPartDisplay={setPartDisplay} />
            </div>

            <div class=' w-1/3 flex flex-col items-center text-white justify-center' >
              <PercentSelect btnRatingClick={ratingClicked} bodyPart={partDisplay} id={ratingId} setRatingId={setRatingId} />
            </div>
          </div>

          <div class='md:w-1/3 flex flex-col bg-[#9FC490] p-5' >
              *Disability rating area*
          </div>
        </div>

        {}
        <div className='flex w-full justify-center mt-6'>
          <div className='w-full border-[#C0DFA1] bg-[#000e1e] ps-20 py-3 pe-3 relative text-white' id='percContainer' style={{borderWidth: '1px'}}>
            <div class='flex scrollbar-hide overflow-x-auto'>
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
