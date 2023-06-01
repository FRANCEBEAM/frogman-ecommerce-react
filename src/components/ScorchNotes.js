import React from 'react'
import TroopsCard from './TroopsCard'

const ScorchNotes = () => {
  return (
    <>
      <div className='w-full h-[1000px] lg:h-[1100px] xl:h-[1000px]'>
            <div className="w-full h-full">
                <div className='absolute w-full h-[1000px] lg:h-[1100px] xl:h-[1000px] bg-gradient-to-l from-[#000000] bg-[#000000]/70'></div>
                <img className="w-full h-full object-cover" src="../assets/novel2-bg.jpg" alt="" />

                <div className='p-4 absolute w-full top-[1310px] sm:top-[1390px] lg:top-[1330px] xl:top-[1200px]'>
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