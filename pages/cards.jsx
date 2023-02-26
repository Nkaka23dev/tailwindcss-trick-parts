import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Card() {
  return (
    <section >
      <div className='max-w-6xl mx-auto gap-5 pb-32   grid grid-cols-3 md:grid-cols-1 bg-white md:px-5 px-10'>
        {[{ title: "VIJ main menu", link:[], desc: ["home", "education", "research", "about", "university", "vu", "alumni"] }, { title: "Most searched", link: [], desc: ["home", "education", "research", "about", "university", "vu", "alumni"] }, { title: "Feature", link: [1, 2, 3, 4, 5], desc: ["home", "education", "research"] }].map((value, idx) => {
          return (
            <div className=''>
              <h1 className='text-2xl'> {value.title}</h1>
              <div className=' h-full px-4 py-5  flex flex-col justify-between shadow-xl '>
                <div>
                  {value.desc.map((e, idx) => {
                    return (
                      <div className='mt-2 flex justify-between'>
                        <p className='text-xl capitalize'>{e}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12L4 12" stroke="#323232" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#323232" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    )
                  })}
                </div>
                <div className='-mt-3'>
                  {value.link.map((i, id) => {
                    return (
                      <FacebookIcon  style={{fontSize: '60px', fontWeight: 300}} />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}