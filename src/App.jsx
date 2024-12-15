import React from "react"
import { Fade, Slide } from "react-awesome-reveal"

const cards=[
  {
    id:1,
    name:"Naruto",
    img:"/images/img1.jpg",
    desc:"Naruto is main Hero of Hidden Leaf."
  },
  {
    id:2,
    name:"Sakura",
    img:"/images/img4.jpg",
    desc:" Sakura is Medical Ninja of Hidden Leaf."
  },
  {
    id:3,
    name:"Sasuke",
    img:"/images/img5.jpg",
    desc:"Sasuke is Ucchie  Clan of Hidden Leaf."
  }
]


function App() {

  return (
      <div className="bg-gradient-to-b from-slate-950 bg-gray-400 h-full sm:h-screen grid place-items-center">
        <div className="mx-auto">
          <h1 className="font-bold text-white text-center text-3xl mb-14 mt-5 sm:mt-0">Responsive Anime Animated Cards</h1>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {
                cards.map(({id,img,name,desc})=>(
                  <div key={id} className="text-white shadow-md shadow-orange-400 hover:shadow-yellow-300 rounded-lg overflow-hidden relative group hover:scale-90 hover:duration-200">
                    <img className="w-full max-w-80 h-80 " src={img} alt="images" />

                      <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100
                      group-hover:top-0 p-4 w-full h-full bg-black/50 
                      group-hover:backdrop-blur-sm
                      divide-neutral-700">
                       <div>
                          <Slide cascade>
                               <h1 className="text-3xl font-bold text-yellow-500">{name}</h1>
                               <Fade cascade damping={0.05}
                               duration={1000}
                               className="text-gray-200">
                                 {desc}
                               </Fade>
                               <button className=" m-2 py-2 px-6 border-2 border-gray-400 rounded-md text-white">View</button>
                          </Slide>
                       </div>
                      </div>
                  </div>
                ))
              }

            </div>
         
        </div>
      </div>
  )
}

export default App