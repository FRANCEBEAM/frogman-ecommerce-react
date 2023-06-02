import React from 'react'
import TroopsCard from './TroopsCard'

const EmberNotes = () => {
  return (
    <>
        <div className='w-full h-full inline-block relative'>
            <div className="w-full h-full block m-auto py-20 lg:m-auto">
                <img className="w-full h-full object-cover bg-gradient-to-l absolute from-[#000000] bg-[#000000]/100 opacity-20 -z-10" src="assets/novel1-bg.jpg" alt="" />

                <div className='p-4 w-full pt-[100px]'>
                    <div className='sm:justify-end sm:grid sm:justify-items-end sm:right-0 sm:text-right lg:max-w-[1200px] lg:m-auto'>
                        <h1 className='text-white text-4xl uppercase font-bold max-w-[400px] sm:max-w-[500px]'>Immerse Yourself in Gripping Tales of Tactical Intrigue</h1>
                        <p className='text-white text-base pt-4 max-w-[400px] sm:max-w-[500px]'>Explore our collection of graphic novels that bring the world of black powder warfare to life. Immerse yourself in gripping stories, visually stunning artwork, and intricate narratives that will transport you to the heart of tactical intrigue.</p>
                    </div>

                    <div className='w-full h-full lg:pt-20 lg:max-w-[1200px] lg:m-auto'>
                        <TroopsCard 
                            key={1}
                            link="/"
                            img="assets/ember-bg.jpg"
                            hypernotes="Hypernotes Ember"
                            subhead="Thrilling Tale of Tactical Resilience" 
                            para_text1="A highly trained operative driven by a relentless sense of duty and a desire to uncover the truth. As you delve deeper into the pages of this graphic novel, you'll witness heart-pounding action, complex character dynamics, and strategic brilliance at every turn. Navigate treacherous landscapes, encounter formidable adversaries, and uncover hidden conspiracies that threaten to plunge the world into darkness." 
                            para_text2="With visually stunning artwork and intricate storytelling, Hypernotes Ember Soldier immerses you in a richly detailed universe. The masterful illustrations bring the characters to life, capturing their emotions, struggles, and triumphs with vivid clarity. Explore the captivating world of black powder warfare through the eyes of Ember Soldier as you witness the consequences of tactical decisions and the resilience of the human spirit."
                            notes_img1="assets/emberimg-1.jpg" 
                            notes_img2="assets/emberimg-2.jpg"
                            notes_img3="assets/emberimg-3.png"
                            notes_img4="assets/emberimg-4.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EmberNotes