import React from "react";
import Link from "next/link"

const Signup = () => {
  return (
    <section className="bg-gradient-to-b from-[#fcfdfd] via-[#fffbee] to-[#f7f9ff] text-white h-full">
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-xl shadow-xl rounded-lg p-10">
            <div className="flex flex-col justify-center items-center">
                <p className="text-black text-4xl text-bold">Let's get in touch</p>
                <p className="text-black text-sm py-2">Already have an account?
                    <Link href="/login" className="text-blue-900"> Login Here</Link>
                </p>
                <form>
                  <label>
                    Full Name
                    <span>
                      *
                    </span>
                  </label>
                </form>
            </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Signup;
