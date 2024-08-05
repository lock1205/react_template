import React from 'react';

const FeatureMain = () => {
  return (
    <div className="mt-20">
      <h2 className="mr-10 text-3xl   my-8 tracking-tight font-customFontEn font-semibold">
        What we are offering to creative people
      </h2>
      <p>
        some unique features that are only prevalent in our specialization
        services
      </p>
      <div className=" flex flex-wrap ">
        {testimonials.map((option, idx) => (
          <div key={idx} className="  p-2 w-full sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-600 bg-neutral-900 ">
              <p>{option.text}</p>
              <div className="mt-5 inline-flex  gap-5">
                <img
                  src={option.image}
                  alt="human_picture"
                  className="w-12 h-12 border rounded-full "
                />

                <div>
                  <p>{option.user}</p>
                  <p className=" absolute text-neutral-500 font-customFontEn tracking-tight">
                    {option.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureMain;
