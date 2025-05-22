import PoemCard from '../components/PoemCard';
import { poems } from '../data/poems';
// import { Link } from 'react-router-dom';

export default function Poetry() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-center">Poetry Collection</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-5 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* Maya Angelou */}
          <div className="lg:col-span-4">
            <PoemCard 
              poet="Maya Angelou"
              title=""
              content={poems.angelou}
              cornerClass="lg:rounded-tl-4xl"
            />
          </div>
          
          {/* W.H. Auden */}
          <div className="lg:col-span-2">
            <PoemCard 
              poet="W.H. Auden"
              title=""
              content={poems.auden}
              cornerClass="lg:rounded-tr-4xl"
            />
          </div>
          
          {/* Dylan Thomas */}
          <div className="lg:col-span-2">
            <PoemCard 
              poet="Dylan Thomas"
              title=""
              content={poems.thomas}
              cornerClass="lg:rounded-bl-4xl"
            />
          </div>
          
          {/* Emily Dickinson */}
          <div className="lg:col-span-4">
            <PoemCard 
              poet="Emily Dickinson"
              title=""
              content={poems.dickinson}
              cornerClass="lg:rounded-br-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Poetry() {
//   return (
//     <div className="bg-gray-950 py-24 sm:py-32">
//       <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        
//         {/* Six column grid on large screens */}
//         <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">

//           {/* Bento Box One Maya Angelou*/}
//           <div className="flex p-px lg:col-span-4">
//             <div className="overflow-hidden rounded-lg bg-gray-950 ring-1 ring-white/15 lg:rounded-tl-4xl">
              
//               <div className="p-10">
//                 <h3 className="text-sm/4 font-semibold text-gray-400">Maya Angelou</h3>
//                 <p className="mt-2 text-lg font-medium tracking-tight text-white">When Great Trees Fall</p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
//                   When great trees fall, <br />
//                   rocks on distant hills shudder, <br />
//                   lions hunker down <br />
//                   in tall grasses, <br />
//                   and even elephants <br />
//                   lumber after safety. <br /> <br />
//                   When great trees fall <br />
//                   in forests, <br />
//                   small things recoil into silence, <br />
//                   their senses <br />
//                   eroded beyond fear. <br /><br />
//                   When great souls die, <br />
//                   the air around us becomes <br />
//                   light, rare, sterile. <br />  
//                   We breathe, briefly. <br />
//                   Our eyes, briefly, <br />
//                   see with <br />
//                   a hurtful clarity. <br />
//                   Our memory, suddenly sharpened, <br />
//                   examines, <br />
//                   gnaws on kind words <br />
//                   unsaid, <br />
//                   promised walks <br />
//                   never taken. <br /><br />
//                   Great souls die and <br />
//                   our reality, bound to <br />
//                   them, takes leave of us. <br />
//                   Our souls, <br />
//                   dependent upon their <br />
//                   nurture, <br />
//                   now shrink, wizened. <br />
//                   Our minds, formed <br />
//                   and informed by their <br />
//                   radiance, fall away. <br />
//                   We are not so much maddened <br />
//                   as reduced to the unutterable ignorance of <br />
//                   dark, cold <br />
//                   caves. <br /><br />
//                   And when great souls die, <br />
//                   after a period peace blooms, <br />
//                   slowly and always <br />
//                   irregularly. Spaces fill <br />
//                   with a kind of <br />
//                   soothing electric vibration. <br />
//                   Our senses, restored, never <br />
//                   to be the same, whisper to us. <br />
//                   They existed. They existed. <br />
//                   We can be. Be and be <br />
//                   better. For they existed.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bento Box Two W.H.Auden*/}
//           <div className="flex p-px lg:col-span-2">
//             <div className="overflow-hidden rounded-lg bg-gray-950 ring-1 ring-white/15 lg:rounded-tr-4xl">
              
//               <div className="p-10">
//                 <h3 className="text-sm/4 font-semibold text-gray-400">W.H.Auden</h3>
//                 <p className="mt-2 text-lg font-medium tracking-tight text-white">Funeral Blues</p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
//                   Stop all the clocks, cut off the telephone, <br />
//                   Prevent the dog from barking with a juicy bone, <br />
//                   Silence the pianos and with muffled drum <br />
//                   Bring out the coffin, let the mourners come. <br /><br />

//                   Let aeroplanes circle moaning overhead <br />
//                   Scribbling on the sky the message 'He Is Dead', <br />
//                   Put crepe bows around the white necks of the public doves, <br />
//                   Let the traffic policemen wear black cotton gloves. <br /><br />

//                   He was my North, my South, my East and West, <br />
//                   My working week, and my Sunday rest, <br />
//                   My noon, my midnight, my talk, my song; <br />
//                   I thought that love would last forever; I was wrong. <br /><br />

//                   The stars are not wanted now: put out every one, <br />
//                   Pack up the moon and dismantle the sun, <br />
//                   Pour away the ocean and sweep up the wood; <br />
//                   For nothing now can ever come to any good.

//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bento Box Three Dylan Thomas*/}
//           <div className="flex p-px lg:col-span-2">
//             <div className="overflow-hidden rounded-lg bg-gray-950 ring-1 ring-white/15 lg:rounded-bl-4xl">
              
//               <div className="p-10">
//                 <h3 className="text-sm/4 font-semibold text-gray-400">Dylan Thomas</h3>
//                 <p className="mt-2 text-lg font-medium tracking-tight text-white">Do Not Go Gentle Into That Good Night</p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
//                   Do not go gentle into that good night, <br />
//                   Old age should burn and rave at close of day; <br />
//                   Rage, rage against the dying of the light. <br /><br />
//                   Though wise men at their end know dark is right, <br />
//                   Because their words had forked no lightning they <br />
//                   Do not go gentle into that good night. <br /><br />
//                   Good men, the last wave by, crying how bright <br />
//                   Their frail deeds might have danced in a green bay, <br />
//                   Rage, rage against the dying of the light. <br /><br />
//                   Wild men who caught and sang the sun in flight, <br />
//                   And learn, too late, they grieved it on its way, <br />
//                   Do not go gentle into that good night. <br /><br />
//                   Grave men, near death, who see with blinding sight <br />
//                   Blind eyes could blaze like meteors and be gay, <br />
//                   Rage, rage against the dying of the light. <br /><br />
//                   And you, my father, there on the sad height, <br />
//                   Curse, bless, me now with your fierce tears, I pray. <br />
//                   Do not go gentle into that good night. <br />
//                   Rage, rage against the dying of the light. <br />
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bento Box Four Emily Dickinson*/}
//           <div className="flex p-px lg:col-span-4">
//             <div className="overflow-hidden rounded-lg bg-gray-950 ring-1 ring-white/15 lg:rounded-br-4xl">
              
//               <div className="p-10">
//                 <h3 className="text-sm/4 font-semibold text-gray-400">Emily Dickinson</h3>
//                 <p className="mt-2 text-lg font-medium tracking-tight text-white">Because I Could Not Stop For Death</p>
//                 <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
//                   Because I could not stop for Death - <br />
//                   He kindly stopped for me - <br />
//                   The Carriage held but just Ourselves - <br />
//                   And Immortality. <br /><br />

//                   We slowly drove - He knew no haste <br />
//                   And I had put away <br />
//                   My labor and my leisure too, <br />
//                   For His Civility - <br /><br />

//                   We passed the School, where Children strove <br />
//                   At Recess - in the Ring - <br />
//                   We passed the Fields of Gazing Grain - <br />
//                   We passed the Setting Sun - <br /><br />

//                   Or rather - He passed Us - <br />
//                   The Dews drew quivering and Chill - <br />
//                   For only Gossamer, my Gown - <br />
//                   My Tippet - only Tulle - <br /><br />

//                   We paused before a House that seemed <br />
//                   A Swelling of the Ground - <br />
//                   The Roof was scarcely visible - <br />
//                   The Cornice - in the Ground - <br /><br />

//                   Since then - 'tis Centuries - and yet <br />  
//                   Feels shorter than the Day <br />
//                   I first surmised the Horses' Heads <br />
//                   Were toward Eternity - <br /><br />

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

