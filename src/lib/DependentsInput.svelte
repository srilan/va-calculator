<script>
  import Dependents from "../stores/Dependents";

  let input = {
    childrenUnder18: 0,
    childrenAbove18: 0,
    hasSpouse: false,
    aidAndAttendance: false,
    dependentParents: 0,
  };

  $: {
    let copy = input;
    Dependents.update((dep) => {
      let temp = dep;
      temp = input;
      return temp;
    });
  }
</script>

<div class="flex flex-col justify-between w-full ps-6 my-5">
  <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
    <div class="my-2">
      <div
        class="flex w-full mont font-normal text-md lg:text-2xl"
        style="color: #3363AE;"
      >
        How many dependent children do you have who are under the age of 18?
      </div>
      <div class="text-black">
        <select
          class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
          bind:value={input.childrenUnder18}
        >
          <option value={0}>None</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
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
        How many dependent children do you have who are between the ages of 18
        and 24?
      </div>
      <div class="text-black">
        <select
          class="border bg-gray-200 text-black px-3 py-2 mt-1 mb-1 text-sm w-30"
          bind:value={input.childrenAbove18}
        >
          <option value={0}>None</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
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
            bind:value={input.hasSpouse}
          >
            <option value={false}>Single</option>
            <option value={true}>Married</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  {#if input.hasSpouse}
    <div>
      <div class="flex flex-row" style="border-top: 2px solid #b52d38;">
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
              bind:value={input.aidAndAttendance}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  {/if}

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
          bind:value={input.dependentParents}
        >
          <option value={0}>None</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
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
