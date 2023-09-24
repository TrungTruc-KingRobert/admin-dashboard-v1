const NewUsers = () => {
  return (
    <section className="mt-[1.3rem]">
      <h2>New Users</h2>
      <div className="bg-[var(--color-white)] p-[var(--card-padding)] rounded-[var(--card-border-radius)] mt-4 shadow-[var(--box-shadow)] flex justify-around flex-wrap gap-[1.4rem] cursor-pointer duration-300 ease delay-0 hover:shadow-none">
        <div className="flex flex-col items-center justify-center xl:basis-2/5 md:basis-[35%]">
          <img
            src="/profile-2.jpg"
            className="w-20 h-20 mb-[0.4rem] rounded-[50%]"
          />
          <h2>Jack</h2>
          <p>54 Min Ago</p>
        </div>

        <div className="flex flex-col items-center justify-center xl:basis-2/5 md:basis-[35%]">
          <img
            src="/profile-3.jpg"
            className="w-20 h-20 mb-[0.4rem] rounded-[50%]"
          />
          <h2>Amir</h2>
          <p>3 Hours Ago</p>
        </div>

        <div className="flex flex-col items-center justify-center xl:basis-2/5 md:basis-[35%]">
          <img
            src="/profile-4.jpg"
            className="w-20 h-20 mb-[0.4rem] rounded-[50%]"
          />
          <h2>Ember</h2>
          <p>6 Hours Ago</p>
        </div>

        <div className="flex flex-col items-center justify-center xl:basis-2/5 md:basis-[35%]">
          <img
            src="/plus.png"
            className="w-20 h-20 mb-[0.4rem] rounded-[50%]"
          />
          <h2>More</h2>
          <p>New User</p>
        </div>
      </div>
    </section>
  );
};

export default NewUsers;
