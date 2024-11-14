const TourSummaryHero = () => {
  return (
    <section className="relative flex flex-col md:flex-row md:justify-end">
      {/* Image section */}
      <div
        className=" h-auto md:h-[1000px] lg:h-[900px] xl:h-[830px] xl2:h-[775px] -mx-4 md:-mx-0 w-screen md:w-[calc(50%-2.25rem)] md:-left-6 md:max-w-none md:overflow-hidden md:absolute xl:left-[-3vw] xl:w-[48vw] xl2:left-[-220px] xl2:w-[850px]
       "
      >
        <img
          src="https://www.trafalgar.com/media/x0th5lxn/best-italy-guided-tour-2.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=1200&quality=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Summary section */}
      <div className="relative z-10 flex flex-col justify-center  p-4 md:p-8 bg-white w-1/2">
        <h1 className="text-4xl font-bold">Summary Title</h1>
        <p className="mt-4 text-lg">Summary description goes here.</p>
      </div>
    </section>

    // <div className="flex flex-col lg:flex-row">
    //   <div className="lg:absolute lg:h-full lg:inset-y-0 lg:left-0 lg:w-[calc(50vw)] bg-green-300">
    //     <img src="https://www.trafalgar.com/media/x0th5lxn/best-italy-guided-tour-2.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=1200&quality=80" />
    //   </div>
    //   <div className="flex flex-col justify-center lg:ml-[calc(50vw)] lg:pl-8 bg-red-500">
    //     <p>Summary description</p>
    //   </div>
    // </div>
  )
}

export default TourSummaryHero
// lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-0  lg:h-screen bg-gray-400  lg:-mx-8
