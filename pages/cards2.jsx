import React from "react";

export default function cards2() {
  return (
    <div>
      <section className="py-32">
        <div className="max-w-7xl mx-auto gap-8 grid grid-cols-3 md:grid-cols-1 md:px-5">
          {[1, 2, 3].map((e, idx) => {
            return (
              <div className="flex flex-col  shadow-2xl" key={idx}>
                <div className="self-center">
                  <img
                    className="h-32 w-32 rounded-full "
                    src="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg"
                    alt=""
                  />
                </div>

                <div className="space-y-4 px-10 grid text-center mt-4">
                  <h1 className="self-center ">Card Title goes here</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorem iste assumenda omnis ducimus qui nihil! Nisi odio
                    sapient
                  </p>
                  {idx === 2 && (
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sapiente quos exercitationem, assumenda perspiciatis
                      laudantium delectus numquam consequuntur tenetur
                      consequatur optio obcaecati sunt illo mollitia amet id
                      quaerat repellendus doloremque neque at. Laudantium sint
                      reprehenderit necessitatibus neque odit, molestiae ab
                      quia.
                    </p>
                  )}
                </div>

                <div className="mt-auto">
                  <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full">
                    Buy food
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
