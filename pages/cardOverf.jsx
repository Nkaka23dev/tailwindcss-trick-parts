import React from "react";

export default function cardOverf() {
  return (
    // To hide the overflow on apply (s) class on body
    <section> 
      <div className="flex max-w-7xl mx-auto s">
        {[1, 2, 3,4,5,6,7].map((e, i) => {
          return (
            <div className="max-w-[40.33%]  p-4 basis-[40.33%] flex-grow-0 flex-shrink-0">
              <img
                src="https://tsh.io/wp-content/uploads/fly-images/25216/stageclip-case-study-cover-736x439.jpeg"
                alt="img"
                className="rounded-2xl"
              />
              <div className="spoace-y-7 mt-5">
                <h4 className="text-3xl hover:text-indigo-600 duration-500 cursor-pointer max-w-3xl font-bold">
                  StageCIip saves $28,000 on theil cloud bill monthly by
                  reworking their Azure architecture
                </h4>
                <p className="max-w-3xl">
                  At a point, 1000 WordPress sites used their cloud. Our
                  engineers nested all of them under 1 Nextjs app, cutting out
                  many service instances.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
