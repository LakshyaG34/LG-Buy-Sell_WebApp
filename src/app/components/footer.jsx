import React from "react"
import Link from "next/link"

const Footer = () =>
{
    return(
        <footer className="mt-auto">
            <hr/>
            <div className="flex flex-col justify-center items-center">
                <div className="py-4 text-purple-600/50">
                    <p>A market place for students, made by Lakshya Goyal. Sell smart, buy smarter💼📱📚</p>
                </div>
                <div className="mt-4 text-purple-400">
                    <span className="flex flex-row gap-8">
                        <Link  href ="/" className="text-sm font-bold">Brand Guidelines</Link>
                        <p>|</p>
                        <Link  href ="/" className="text-sm font-bold">Privacy Policy</Link>
                        <p>|</p>
                        <Link  href ="/" className="text-sm font-bold">Terms of Service</Link>
                    </span>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-purple-600/50">© 2025 NIT KKR Buy & Sell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;