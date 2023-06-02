import React from 'react'
import TroopsCard from './TroopsCard'

const ScorchNotes = () => {
  return (
    <>
      <div className='w-full h-full inline-block relative'>
            <div className="w-full h-full block m-auto py-10 lg:m-auto">
              <img className="w-full h-full object-cover bg-gradient-to-l absolute from-[#000000] bg-[#000000]/100 opacity-10 -z-10" src="../assets/novel2-bg.jpg" alt="Scorch Notes" />

                <div className='p-4 w-full'>
                    <div className='w-full h-full lg:pt-20 lg:max-w-[1200px] lg:m-auto'>                 
                        <TroopsCard 
                            key={2}
                            link="/"
                            img="../assets/scorch-bg.jpg"
                            hypernotes="Hypernotes scortch"
                            subhead="A Saga of Tactical Inferno" 
                            para_text1="In Hypernotes Scorch Soldier, you'll follow the path of an elite soldier whose mastery of fire is unmatched. This scorching tale takes you on a high-octane journey, as the protagonist harnesses the power of flames to turn the tide of battle. Witness their unrivaled tactical prowess, as they navigate through a web of challenges, confront ruthless adversaries, and strive to bring order to a chaotic world." 
                            para_text2="Through stunning artwork and gripping storytelling, Hypernotes Scorch Soldier immerses you in a vividly realized universe. The mesmerizing illustrations breathe life into each page, capturing the intensity of fire and the raw emotions of the characters. Brace yourself for explosive action sequences, intricate plot twists, and the relentless pursuit of justice in the face of overwhelming odds."
                            notes_img1="../assets/scorchimg-1.jpg" 
                            notes_img2="../assets/scorchimg-2.jpg"
                            notes_img3="../assets/scorchimg-3.jpg"
                            notes_img4="../assets/scorchimg-4.jpg"
                        />
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default ScorchNotes