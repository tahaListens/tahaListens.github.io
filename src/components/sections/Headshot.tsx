function Headshot() {
  return (
    <div className=" flex justify-center ">
      <div className="rounded-full w-fit bg-gradient-to-r from-pink via-yellow to-blue p-[3px] ">
      <img
        src="/assets/images/headshot.jpg"
        alt="My Headshot"
        className="w-50 h-auto rounded-full "
      />
    </div>
    </div>
  );
}

export default Headshot;
