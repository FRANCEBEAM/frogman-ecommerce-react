import React from 'react'
import TroopsCard from './TroopsCard'

const EmberNotes = () => {
  return (
    <>
        {/* <div className='w-full h-[1310px] sm:h-[1200px] lg:h-[1480px] bg-[#000000]/10 absolute z-10 bg-gradient-to-l from-[#000000]'></div>
        <img className='w-full h-[1310px] sm:h-[1200px] lg:h-[1480px] object-cover absolute' src="../assets/novel1-bg.jpg" alt="" />
            <div className='w-full h-full m-auto p-4 lg:max-w-[1200px] relative z-20'>
                
                <div className='w-full h-full m-auto relative'>
                    <div className='top-[120px] relative'>
                        <div className='absolute m-auto sm:justify-end sm:right-0 sm:text-right'>
                            <h1 className='text-white text-4xl uppercase font-bold max-w-[400px] sm:max-w-[500px]'>Immerse Yourself in Gripping Tales of Tactical Intrigue</h1>
                            <p className='text-white text-base pt-4 max-w-[400px] sm:max-w-[500px]'>Explore our collection of graphic novels that bring the world of black powder warfare to life. Immerse yourself in gripping stories, visually stunning artwork, and intricate narratives that will transport you to the heart of tactical intrigue.</p>
                        </div>
                    </div>

                    <div className='w-full h-full top-[410px] relative sm:top-[350px]'>
                        <TroopsCard 
                            link="/"
                            img="../assets/ember-bg.jpg"
                            hypernotes="Hypernotes Ember:"
                            subhead="Thrilling Tale of Tactical Resilience" 
                            para_text1="A highly trained operative driven by a relentless sense of duty and a desire to uncover the truth. As you delve deeper into the pages of this graphic novel, you'll witness heart-pounding action, complex character dynamics, and strategic brilliance at every turn. Navigate treacherous landscapes, encounter formidable adversaries, and uncover hidden conspiracies that threaten to plunge the world into darkness." 
                            para_text2="With visually stunning artwork and intricate storytelling, Hypernotes Ember Soldier immerses you in a richly detailed universe. The masterful illustrations bring the characters to life, capturing their emotions, struggles, and triumphs with vivid clarity. Explore the captivating world of black powder warfare through the eyes of Ember Soldier as you witness the consequences of tactical decisions and the resilience of the human spirit."
                            ember_img1="../assets/emberimg-1.jpg" 
                            ember_img2="../assets/emberimg-2.jpg"
                            ember_img3="../assets/emberimg-3.png"
                            ember_img4="../assets/emberimg-4.png"
                        />

                        
                    </div>
                </div>
            </div> */}

        <div className='w-full h-[1300px] md:h-[1400px] xl:h-[1200px]'>
            <div className="w-full h-full">
                <div className='absolute w-full h-[1300px] md:h-[1400px] xl:h-[1200px] bg-gradient-to-l from-[#000000] bg-[#000000]/70'></div>
                <img className="w-full h-full object-cover" src="../assets/novel1-bg.jpg" alt="" />

                <div className='p-4 absolute w-full top-[120px]'>
                    <div className='sm:justify-end sm:grid sm:justify-items-end sm:right-0 sm:text-right lg:max-w-[1200px] lg:m-auto'>
                        <h1 className='text-white text-4xl uppercase font-bold max-w-[400px] sm:max-w-[500px]'>Immerse Yourself in Gripping Tales of Tactical Intrigue</h1>
                        <p className='text-white text-base pt-4 max-w-[400px] sm:max-w-[500px]'>Explore our collection of graphic novels that bring the world of black powder warfare to life. Immerse yourself in gripping stories, visually stunning artwork, and intricate narratives that will transport you to the heart of tactical intrigue.</p>
                    </div>

                    <div className='w-full h-full lg:pt-20 lg:max-w-[1200px] lg:m-auto'>
                        <TroopsCard 
                            key={1}
                            link="/"
                            img="../assets/ember-bg.jpg"
                            hypernotes="Hypernotes Ember"
                            subhead="Thrilling Tale of Tactical Resilience" 
                            para_text1="A highly trained operative driven by a relentless sense of duty and a desire to uncover the truth. As you delve deeper into the pages of this graphic novel, you'll witness heart-pounding action, complex character dynamics, and strategic brilliance at every turn. Navigate treacherous landscapes, encounter formidable adversaries, and uncover hidden conspiracies that threaten to plunge the world into darkness." 
                            para_text2="With visually stunning artwork and intricate storytelling, Hypernotes Ember Soldier immerses you in a richly detailed universe. The masterful illustrations bring the characters to life, capturing their emotions, struggles, and triumphs with vivid clarity. Explore the captivating world of black powder warfare through the eyes of Ember Soldier as you witness the consequences of tactical decisions and the resilience of the human spirit."
                            notes_img1="../assets/emberimg-1.jpg" 
                            notes_img2="../assets/emberimg-2.jpg"
                            notes_img3="../assets/emberimg-3.png"
                            notes_img4="../assets/emberimg-4.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EmberNotes