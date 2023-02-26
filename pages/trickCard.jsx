import React from 'react'

export default function TrickCards() {
  return (
    <section className=''>
      <div className='max-w-6xl mx-auto bg-white px-10 py-6 flex gap-5 md:flex-col lg:px-6'>
        <div className='w-[59rem] md:w-full '>
          {[1, 2].map(() => {
            return (
              <div className='grid grid-cols-2 gap-2 mt-4 md:grid-cols-1 '>
                <img className="w-[18rem] h-[13rem] object-cover object-center aspect-video" src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/439f644d-d6fd-4e91-9fb6-b3c12eec682c/IS_BK4172_Onderzoek_FSW_CrisisVenezuela_1920x700.jpg?w=1250&h=600&fit=clip&rect=167,0,1458,700" alt="" />
                <div  className='' >
                  <p>23 Feb 2023</p>
                  <p>War in Ukraine could
                    escalate the global
                    land rush</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='w-[41rem] md:w-full space-y-16 '>
        {[1, 2,3].map(() => {
            return (
              <div className='grid grid-cols-2 gap-2 mt-4 md:grid-cols-1 '>
                <img className="w-[9rem] h-[6rem] object-cover object-center aspect-video" src="https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/439f644d-d6fd-4e91-9fb6-b3c12eec682c/IS_BK4172_Onderzoek_FSW_CrisisVenezuela_1920x700.jpg?w=1250&h=600&fit=clip&rect=167,0,1458,700" alt="" />
                <div  className='' >
                  <p>23 Feb 2023</p>
                  <p>War in Ukraine could
                    escalate the global
                    land rush</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
