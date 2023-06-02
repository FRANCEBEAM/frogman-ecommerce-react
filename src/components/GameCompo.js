import React from 'react'
import ComponentCard from './ComponentCard'


const GameCompo = () => {

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
            return `${str.slice(0, maxLength)}...`
        }

        return str
    }

  return (
    <>
        <div className='w-full h-full py-10 relative'>
            <img className='absolute w-full h-full inline-block object-cover opacity-40' src="assets/bgcomponent.jpg" alt="" />

            <div className='p-4 text-white pt-[130px] relative lg:max-w-[1200px] lg:m-auto'>
                <h1 className='text-3xl uppercase font-bold lg:text-5xl'>Game Components and Miniature</h1>
                <p className='text-base uppercase'>Close Combat in a Failed State at War</p>
            </div>

            <div className='p-4 relative pt-[50px] justify-center flex flex-wrap gap-3 lg:max-w-[1200px] lg:m-auto'>
                <ComponentCard 
                    head="PMC Troop Scorch" 
                    src="assets/compo1.jpg" 
                    desc="A cutting-edge tactical unit specializing in harnessing the power of fire on the battlefield. As a member of Troop Scorch, you'll experience the thrill of wielding incendiary weaponry and unleashing devastating firepower upon your adversaries." 
                    truncate={truncate}
                />
                <ComponentCard 
                    head="AYARI Troop Guard" 
                    src="assets/compo2.jpg" 
                    desc="An elite unit dedicated to providing unmatched protection on the battlefield. As a member of Troop Guard, you'll embody the essence of defense and resilience, safeguarding your allies and holding the line against any threat that dares to challenge your position."
                    truncate={truncate}
                />
                <ComponentCard 
                    head="Close Combat Essentials" 
                    src="assets/compo3.jpg" 
                    desc="Engage in visceral and immersive battles that will test your strategic thinking, reflexes, and teamwork. Whether you're infiltrating enemy lines, clearing out hostile strongholds, or engaging in intense one-on-one encounters, the game's dynamic environments and realistic combat mechanics will keep you on the edge of your seat." 
                    truncate={truncate}
                />
                <ComponentCard 
                    head="Radial Effect Template" 
                    src="assets/compo4.jpg" 
                    desc="Elevate your design projects to new heights with the Radial Effect Template, a powerful tool that infuses your visuals with dynamic energy and captivating motion. This template is designed to add a mesmerizing radial effect to your graphics, giving them a unique and eye-catching appeal." 
                    truncate={truncate}
                />
            </div>
        </div>   
    </>
  )
}

export default GameCompo