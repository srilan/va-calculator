import React from "react";

function Dependencies({
  childrenUnder18,
  childrenAbove18,
  hasSpouse,
  aidAndAttendance,
  dependentParents,
  monthlyPayment,
  under18Clicked,
  above18Clicked,
  MaritalStatusClicked,
  aidAndAttendanceClicked,
  dependentParentsClicked,
  calculatedRating,
  disabilityRating,
}) {
  return (
    <div className="px-6 pt-5 mt-5">
      <div className="relative bg-white border-t-4 border-[#184997] px-6 pt-5">
        <div className="absolute right-2/4 translate-x-2/4 lg:translate-x-0 top-[-40px] bebas bg-[#184997] flex px-3 text-xl pt-2 pb-1 text-white rounded-t-xl tracking-wider">
          STEP 2
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full ">
          <div className="flex flex-col w-full pe-6 mt-5">
            <div className="flex w-full justify-center items-center bebas text-4xl lg:text-5xl">
              <h2 className="mx-auto" style={{color: "#000000"}}>
                TO COMPLETE THE ASSESSMENT,
                <span style={{color: "#184997"}}>
                  {" "}
                  FILL OUT THE FORM TO PROCEED WITH GENERATING YOUR QUOTE.
                </span>
              </h2>
            </div>
            <div
              className="mont mb-5 text-sm md:text-md lg:text-xl"
              style={{color: "#000000"}}
            >
              Are you sure your VA rating is fair? Let us uncover your potential
              rating eligibility.
            </div>
            <div className="bebas text-3xl my-2 lg:my-5">
              <h2 className="mx-auto text-3xl lg:text-4xl" style={{color: "#000000"}}>
                COMBINED DISABILITY PERCENTAGE:
                <span style={{color: "#184997"}}> {calculatedRating}% </span>
              </h2>
            </div>
            <div className="bebas text-3xl my-2 lg:my-5">
              <h2 className="mx-auto text-3xl lg:text-4xl" style={{color: "#000000"}}>
                CURRENT DISABILITY RATING:
                <span style={{color: "#184997"}}> {disabilityRating}% </span>
              </h2>
            </div>
            <div className="bebas text-3xl my-2 lg:my-5">
              <h2 className="mx-auto text-3xl lg:text-4xl" style={{color: "#000000"}}>
                MONTHLY PAYMENT AMOUNT:
                <span style={{color: "#184997"}}> {monthlyPayment}$ </span>
              </h2>
            </div>
          </div>

          {/* SECOND PANELO TO HAHAHA */}
          <div className="flex flex-col justify-between w-full ps-6 my-5">
            <div className="flex flex-row" style={{borderTop: '2px', solid:  "#b52d38"}}>
              <div className="my-2">
                <div
                  className="flex w-full mont font-normal text-md lg:text-2xl"
                  style={{color: "#3363AE"}}
                >
                  How many dependent children do you have who are under the age
                  of 18?
                </div>
                <div className="text-black">
                  <select
                    className="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
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

            <div className="flex flex-row"
              style={{borderTop: "2px solid #b52d38"}}>
              <div className="my-2">
                <div
                  className="flex w-full mont font-normal lg:text-2xl"
                  style={{color: "#3363AE"}}
                >
                  How many dependent children do you have who are between the
                  ages of 18 and 24?
                </div>
                <div className="text-black">
                  <select
                    className="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
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

            <div className="flex flex-row" style={{bordeTop: "2px", solid: "#b52d38"}}>
              <div className="my-2">
                <div
                  className="flex w-full mont font-normal lg:text-2xl"
                  style={{color: "#3363AE"}}
                >
                  What is your marital status?
                </div>
                <div className="text-black">
                  <div className="text-black">
                    <select
                      className="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
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
                  className="flex flex-row"
                  style={{bordeTop: "2px", solid: "#b52d38"}}
                >
                  <div className="my-2">
                    <div
                      className="flex w-full mont font-normal lg:text-2xl"
                      style={{color: "#3363AE"}}
                    >
                      Do you or your spouse receive Aid and Attendance(A/A)?
                    </div>
                    <div className="text-black">
                      <select
                        className="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
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
              className="flex flex-row"
              style={{borderTop: "2px solid #b52d38", borderBottom: "2px solid #b52d38"}}
            >
              <div className="my-2">
                <div
                  className="flex w-full mont font-normal lg:text-2xl"
                  style={{color: "#3363AE"}}
                >
                  How many dependent parents do you have?
                </div>
                <div className="text-black">
                  <select
                    className="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dependencies;
