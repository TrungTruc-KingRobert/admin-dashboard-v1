const RecentOrders = () => {
  return (
    <section className="mt-[1.3rem] xl:w-[94%] xl:absolute xl:left-1/2 xl:transform xl:translate-x-[-50%] xl:mt-8 xl:mr-0 xl:mb-0 xl:ml-[0.8rem] md:relative md:mt-12 md:mb-0 md:mx-0 md:w-full">
      <h2 className="mb-[0.8rem]">Recent Orders</h2>
      <table className="bg-[var(--color-white)] w-full p-[var(--card-padding)] border-separate text-center shadow-[0_2rem_3rem_var(--color-light)] rounded-[var(--card-border-radius)] duration-300 ease delay-0 hover:shadow-none xl:w-[83vw] md:w-full md:m-0">
        <thead>
          <tr>
            <th className="xl:hidden">Course Name</th>
            <th>Course Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th className="xl:hidden"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)] border-b-[1px] border-solid border-[var(--color-light)] xl:hidden">
              JavaScript Tutorial
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)] border-b-[1px] border-solid border-[var(--color-light)]">
              85743
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)] border-b-[1px] border-solid border-[var(--color-light)]">
              Due
            </td>
            <td className="h-[2.8rem] border-b-[1px] border-solid border-[var(--color-light)] text-[var(--color-warning)]">
              Pending
            </td>
            <td className="h-[2.8rem] border-b-[1px] border-solid border-[var(--color-light)] xl:hidden text-[var(--color-primary)]">
              Details
            </td>
          </tr>
          <tr>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)] border-b-[1px] border-solid border-[var(--color-light)] xl:hidden">
              CSS Full Course
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)] border-b-[1px] border-solid border-[var(--color-light)]">
              97245
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)] border-b-[1px] border-solid border-[var(--color-light)]">
              Refunded
            </td>
            <td className="h-[2.8rem] border-b-[1px] border-solid border-[var(--color-light)] text-[var(--color-danger)]">
              Declined
            </td>
            <td className="h-[2.8rem] border-b-[1px] border-solid border-[var(--color-light)] xl:hidden text-[var(--color-primary)]">
              Details
            </td>
          </tr>
          <tr>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)]border-none xl:hidden">
              Flex-Box Tutorial
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)]border-none">
              36452
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)]border-none">
              Paid
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)]border-none text-[var(--color-primary)]">
              Active
            </td>
            <td className="h-[2.8rem] text-[var(--color-dark-variant)]border-none xl:hidden text-[var(--color-primary)]">
              Details
            </td>
          </tr>
        </tbody>
      </table>
      <a
        href="#"
        className="text-center block my-4 mx-auto text-[var(--color-primary)]"
      >
        Show All
      </a>
    </section>
  );
};

export default RecentOrders;
