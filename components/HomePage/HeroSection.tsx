import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
 <div className="flex justify-center items-center m-auto w-full   py-8 md:py-12 ">
      <div className="w-full max-w-[1440px] flex flex-col justify-between items-center gap-16 lg:flex-row">
        <div className="flex flex-col gap-12 justify-center items-start max-w-[718px] w-full">
          <div className="flex flex-col gap-4 justify-center">
            <div>
              <h1>
               Your Personal &nbsp;
               <br></br>
                <span className="text-[#ec622b]  tablet:text-nowrap">AI Companion &nbsp;
                </span>
                Awaits
              </h1>
            </div>
            <div><p>Create personalized AI teachers that adapt to your learning style. Choose your subject, voice, and teaching approach for an immersive educational experience.</p></div>
          </div>
          <div className="flex  gap-[10px] justify-start items-center tablet:flex-row w-full max-w-[255px] laptop:w-auto">
                    
          <Link href={"/companions/new"} className="w-full"><div className="rounded px-6 py-4 bg-[#fe5933] hover:bg-none   text-white font-bold w-full text-center ">Create Your Companion</div></Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
            <Image className="w-full" src="/images/CompanionHero.jpg" alt="Hero Image" width={506} height={576} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection