import Image from "next/image"


function StayProductive() {
return (
    <section className="section-gap">
        <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-full">
                <div  className="mb-10">
                    <Image
                    src="/assets/illustration-stay-productive.png"
                    alt="stay-productive.png"
                    width={480}
                    height={480}
                    />
                </div>
                <div className="text-white text-center ml-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-10 mt-10">Stay Productive Wherever you are</h2>
                    <p className="text-2xl mx-2 md:mx-4  max-w-full">Never let location be an issue when you accessing your files. Fylo has you covered for all of your file storage needs.
                        <br />
                        Securely share files and folders with freinds,family and collegues for live collaboration.No email attatchments required.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                    <a href="#" className="underline  text-xl text-[#8cdae4] hover:text-white mt-6">See how Fylo works</a>
                    <Image
                    src="/assets/icon-arrow.svg"
                    className="mt-6 object-contain animate-moveRight"
                    alt="arrow"
                    height={20}
                    width={20}
                    />
                    </div>

                </div>
            </div>

        </div>
    </section>
)
}

export default StayProductive
