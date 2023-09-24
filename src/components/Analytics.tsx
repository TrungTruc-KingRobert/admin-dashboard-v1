const Analytics = () => {
  return (
    <>
      <h1>Analytics</h1>
      <section className="grid grid-cols-[repeat(3,1fr)] gap-[1.6rem] xl:grid-cols-[1fr] xl:gap-0 ">
        <div className="bg-[var(--color-white)] p-[var(--card-padding)] rounded-[var(--card-border-radius)] mt-4 shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 hover:shadow-none">
          <div className="flex items-center justify-between">
            <div className="info">
              <h3 className="ml-[0.6rem] text-base">Total Sales</h3>
              <p className="font-extrabold text-[1.8rem] text-[var(--color-dark)]">
                $65,024
              </p>
            </div>
            <div className="relative w-[92px] h-[92px] rounded-[50%]">
              <svg className="w-[7rem] h-[7rem]">
                <circle
                  cx="38"
                  cy="38"
                  r="36"
                  fill="none"
                  stroke-width="10"
                  stroke-linecap="round"
                  strokeDashoffset="40"
                  strokeDasharray="200"
                  className="translate-x-[5px] translate-y-[5px] stroke-[var(--color-success)]"
                ></circle>
              </svg>
              <div className="absolute top-[-3px] left-[-1px] flex items-center justify-center h-full w-full">
                <p>+80%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-white)] p-[var(--card-padding)] rounded-[var(--card-border-radius)] mt-4 shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 hover:shadow-none">
          <div className="flex items-center justify-between">
            <div className="info">
              <h3 className="ml-[0.6rem] text-base">Site Visit</h3>
              <p className="font-extrabold text-[1.8rem] text-[var(--color-dark)]">
                24,981
              </p>
            </div>
            <div className="relative w-[92px] h-[92px] rounded-[50%]">
              <svg className="w-[7rem] h-[7rem]">
                <circle
                  cx="38"
                  cy="38"
                  r="36"
                  fill="none"
                  stroke-width="10"
                  stroke-linecap="round"
                  strokeDashoffset="120"
                  strokeDasharray="200"
                  className="translate-x-[5px] translate-y-[5px] stroke-[var(--color-danger)]"
                ></circle>
              </svg>
              <div className="absolute top-[-3px] left-[-1px] flex items-center justify-center h-full w-full">
                <p>+40%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-white)] p-[var(--card-padding)] rounded-[var(--card-border-radius)] mt-4 shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 hover:shadow-none     searches">
          <div className="flex items-center justify-between">
            <div className="info">
              <h3 className="ml-[0.6rem] text-base">Searches</h3>
              <p className="font-extrabold text-[1.8rem] text-[var(--color-dark)]">
                14,147
              </p>
            </div>
            <div className="relative w-[92px] h-[92px] rounded-[50%]">
              <svg className="w-[7rem] h-[7rem]">
                <circle
                  cx="38"
                  cy="38"
                  r="36"
                  fill="none"
                  stroke-width="10"
                  stroke-linecap="round"
                  strokeDashoffset="80"
                  strokeDasharray="200"
                  className="translate-x-[5px] translate-y-[5px] stroke-[var(--color-primary)]"
                ></circle>
              </svg>
              <div className="absolute top-[-3px] left-[-1px] flex items-center justify-center h-full w-full">
                <p>+60%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
