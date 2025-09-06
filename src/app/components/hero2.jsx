import React from "react"
import Link from "next/link"

const Hero2 = () =>
{
    
    return(
        <section className="mt-8 bg-gradient-to-b from-[#d2daf1] to-[#180047] rounded-2xl py-10">
            <div className="flex flex-col justify-start mx-4">
                <div className="mx-15 text-center">
                    <p className="text-4xl md:text-[46px] md:leading-[60px] bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">Ready to try-out this App?</p>
                    <p className="text-lg bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text mb-4">Your next favourite tool is just one click away</p>
                    <Link href="/signup" className="bg-purple-800 text-white border rounded-full px-2 py-2">Get Started</Link>

                </div>
            </div>
        </section>
    )
}

export default Hero2;