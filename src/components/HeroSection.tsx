import Image from "next/image"


function HeroSection() {
return (
    <section className="section-gap ">
        <div className="container flex flex-col items-center justify-center">
            <div>
                <Image
                src="/assets/illustration-intro.png"
                alt="intro"
                width={480}
                height={480}
                />
            </div>
            <div className="mt-12 text-white flex flex-col justify-center items-center ">
                <h1 className="text-center text-6xl">
                    All Your Files in one secure location
                    <br/>
                    accessible anywhere.
                </h1>
                <p className="text-center text-xl md:text-2xl mt-10 ">Fylo stores all your most important files i one secure location.<br/>
                    Access them wherever you need,shara and collaborate with<br/>
                    friends family, and co-workers
                </p>
                <button className="mt-5 btn border-none px-12 py-2 text-white text-xl rounded-full ">Get Started</button>
            </div>
        </div>
        <div className="w-full h-[200px] relative">
    <Image
    src="/assets/bg-curvy-desktop.svg"
    alt="bg-curvy-desktop.svg"
    layout="fill" // Makes the image fill its parent container
    objectFit="cover" // Ensures the image covers the container without distortion
    priority // Optimizes loading for critical images
    />
</div>
    </section>
)
}

export default HeroSection
