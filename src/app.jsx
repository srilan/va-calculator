import { useState, useEffect } from "preact/hooks";
import { PartSelect } from "./components";
import PercentSelect from "./components/PercentSelect";
import RatingsBtn from "./components/RatingsBtn";

export function App() {
  const [childrenUnder18, setChildrenUnder18] = useState(0);
  const [childrenAbove18, setChildrenAbove18] = useState(0);
  const [hasSpouse, setMaritalStatus] = useState(false);
  const [aidAndAttendance, setAidAndAttendance] = useState(false);
  const [dependentParents, setDependentParents] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const under18Clicked = (under18) => {
    setChildrenUnder18(Number(under18));
  };

  const above18Clicked = (above18) => {
    setChildrenAbove18(Number(above18));
  };

  const MaritalStatusClicked = (withSpouse) => {
    let isMarried = withSpouse === "1";
    setMaritalStatus(isMarried);
  };

  const aidAndAttendanceClicked = (hasAidAttendance) => {
    let aidAttendance = hasAidAttendance === "1";
    setAidAndAttendance(aidAttendance);
  };

  const dependentParentsClicked = (dependentParents) => {
    setDependentParents(Number(dependentParents));
  };

  const calculateMonthlyPayment = () => {
    setMonthlyPayment(childrenAbove18 + childrenUnder18); //dito papasok yung fetch ng formula
  };

  useEffect(() => {
    calculateMonthlyPayment();
  }, [childrenAbove18, childrenUnder18]);

  const [ratingId, setRatingId] = useState(1);
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
    rleg: false,
  });
  const [disabilityLoading, setDisabilityLoading] = useState(false);
  // State for current selected Body Part
  const [partDisplay, setPartDisplay] = useState("Others");

  // State for array of ratings selected to display
  const [ratings, setRatings] = useState([]);

  // function to add new ratings
  const ratingClicked = (rating, part, id) => {
    setRatings([...ratings, { rate: rating, part: part, id: id }]);
  };


  useEffect(() => {
    recalculate();
  }, [ratings]);

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
      switch (elem.part) {
        case "Head":
          thePart = "head";
          break;
        case "Tosro":
          thePart = "torso";
          break;
        case "Left Arm":
          thePart = "left_arm";
          break;
        case "Right Arm":
          thePart = "right_arm";
          break;
        case "Left Leg":
          thePart = "left_leg";
          break;
        case "Right Leg":
          thePart = "right_leg";
          break;
        default:
          thePart = "other";
      }

      body[thePart].push(elem.rate);
    });
    setDisabilityLoading(true);
    fetch("https://va-calc-be.onrender.com/calculator/disability-rating", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((res) => {
        setDisabilityRating(res);
      })
      .finally(() => {
        setDisabilityLoading(false);
      });
    return body;
  };

  // Remove rating
  const removeRating = (id) => {
    let newRates = ratings.filter((item) => item.id != id);
    setRatings(newRates);
  };

  return (
    <>
      <div class="w-full bg-black text-white p-3">*NavBar here*</div>

      <div class="flex flex-col w-full bg-white h-full py-12 px-10">
        <div className="flex flex-col lg:flex-row">
          {/* Instruction Block */}
          <div class="pt-10 pb-[60px] lg:pe-[45px] ps-10 lg:pt-5 bg-slate-200 sm:w-full lg:w-2/6 flex flex-col relative lg:border-r-2 border-[#184997] gap-10 justify-center">
            <div class="absolute bottom-0 right-2/4 translate-x-2/4 lg:translate-x-0 lg:bottom-auto lg:right-[-18px] lg:top-2/4 bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 lg:rotate-[270deg] text-white rounded-t-xl tracking-wider">
              STEP 1
            </div>
            <span class="bebas text-4xl">
              BEGIN BY CHOOSING THE AREAS{" "}
              <span class="text-[#b52d38]"> WHERE YOU HAVE DISABILITIES </span>
            </span>

            <span class="mont text-lg font-medium pe-10">
              Choose the specific body part affected by your disability and
              indicate the percentage of impairment from 0% to 100%.
            </span>
          </div>

          {/* Diagram and Percent Buttons */}
          <div class="w-full lg:w-2/4 flex flex-col sm:flex-row justify-evenly relative border-2 border-[#184997]">
            <div class="border-1 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <PartSelect
                part={part}
                setPart={setPart}
                partDisplay={partDisplay}
                setPartDisplay={setPartDisplay}
              />
            </div>

            <div class=" w-1/3 flex flex-col items-center text-white justify-center">
              <PercentSelect
                btnRatingClick={ratingClicked}
                bodyPart={partDisplay}
                id={ratingId}
                setRatingId={setRatingId}
              />
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
                      stroke-dashoffset={"calc(400 - ("+ disabilityRating.disabilityRating/10 * 40 +" * 65) / 100)"}
                    ></circle>
                    {/* Change increments by 40. (the 200 one) */}
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
                        {disabilityRating.calculatedRating?disabilityRating.disabilityRating+'':'0'}%
                    </text>
                    )}
                  </svg>
                </div>
              </div>


            <div className="bebas text-3xl mt-4">
              Total Monthly Compensation
            </div>

            <div class="text-2xl mont mt-2">$ 4,365.60</div>
          </div>
        </div>

        {}
        <div className="flex w-full justify-center mt-6">
          <div
            className="w-full border-[#184997] bg-white ps-20 pt-3 pb-2 pe-3 relative text-white"
            id="percContainer"
            style={{ borderWidth: "2px" }}
          >
            <div class="">
              {ratings.map((item) => (
                <RatingsBtn elem={item} removeMe={removeRating} />
              ))}
              {ratings.length == 0 && (
                <div class="opacity-0 pointer-events-none">
                  <RatingsBtn
                    elem={{ part: "", rate: 0, id: 0 }}
                    removeMe={removeRating}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ETO KAY MIGO  */}
      {/* ETO FIRST PANEL */}
      <div class="bg-white">
        <div class="flex flex-col md:flex-row justify-center w-full">
          <div class="flex flex-col w-full px-6  mt-5">
            <div class="flex w-full justify-center items-center bebas text-4xl lg:text-5xl">
              <h2 class="mx-auto" style="color: #000000;">
                TO COMPLETE THE ASSESSMENT,
                <span style="color: #184997;">
                  {" "}
                  FILL OUT THE FORM TO PROCEED WITH GENERATING YOUR QUOTE.
                </span>
              </h2>
            </div>
            <div
              class="mont mb-5 text-sm md:text-md lg:text-xl"
              style="color: #000000;"
            >
              Are you sure your VA rating is fair? Let us uncover your potential
              rating eligibility.
            </div>
            <div class="bebas text-3xl my-2 lg:my-5">
              <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
                COMBINED DISABILITY PERCENTAGE:
                <span style="color: #184997">
                  {disabilityRating.calculatedRating?disabilityRating.calculatedRating+'':'0'}%
                </span>
              </h2>
            </div>
            <div class="bebas text-3xl my-2 lg:my-5">
              <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
                CURRENT DISABILITY RATING:
                <span style="color: #184997"> 
                  {disabilityRating.calculatedRating?disabilityRating.disabilityRating+'':'0'}%
                </span>
              </h2>
            </div>
            <div class="bebas text-3xl my-2 lg:my-5">
              <h2 class="mx-auto text-3xl lg:text-4xl" style="color: #000000;">
                MONTHLY PAYMOUNT AMOUNT:
                <span style="color: #184997"> {monthlyPayment}$ </span>
              </h2>
            </div>
          </div>

          {/* SECOND PANELO TO HAHAHA */}
          <div class="flex flex-col justify-between w-full px-6 my-5">
            <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
              <div class="my-2">
                <div
                  class="flex w-full mont font-normal text-md lg:text-2xl"
                  style="color: #3363AE;"
                >
                  How many dependent children do you have who are under the age
                  of 18?
                </div>
                <div class="text-black">
                  <select
                    class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                    onInput={(e) => under18Clicked(e.target.value)}
                    value={childrenUnder18}
                  >
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
              <div class="my-2">
                <div
                  class="flex w-full mont font-normal lg:text-2xl"
                  style="color: #3363AE;"
                >
                  How many dependent children do you have who are between the
                  ages of 18 and 24?
                </div>
                <div class="text-black">
                  <select
                    class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                    onInput={(e) => above18Clicked(e.target.value)}
                    value={childrenAbove18}
                  >
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
              <div class="my-2">
                <div
                  class="flex w-full mont font-normal lg:text-2xl"
                  style="color: #3363AE;"
                >
                  What is your marital status?
                </div>
                <div class="text-black">
                  <div class="text-black">
                    <select
                      class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                      onInput={(e) => MaritalStatusClicked(e.target.value)}
                      value={hasSpouse ? "1" : "0"}
                    >
                      <option value="0">Single</option>
                      <option value="1">Married</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {hasSpouse && (
              <div>
                <div
                  class="flex flex-row"
                  style="border-top: 2px solid #b52d38;"
                >
                  <div class="my-2">
                    <div
                      class="flex w-full mont font-normal lg:text-2xl"
                      style="color: #3363AE;"
                    >
                      Do you or your spouse receive Aid and Attendance(A/A)?
                    </div>
                    <div class="text-black">
                      <select
                        class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                        onInput={(e) => aidAndAttendanceClicked(e.target.value)}
                        value={aidAndAttendance ? "1" : "0"}
                      >
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              class="flex flex-row"
              style="border-top: 2px solid #b52d38; border-bottom: 2px solid #b52d38;"
            >
              <div class="my-2">
                <div
                  class="flex w-full mont font-normal lg:text-2xl"
                  style="color: #3363AE;"
                >
                  How many dependent parents do you have?
                </div>
                <div class="text-black">
                  <select
                    class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
                    onInput={(e) => dependentParentsClicked(e.target.value)}
                    value={dependentParents}
                  >
                    <option value="0">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              id="default-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              HELLO
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
