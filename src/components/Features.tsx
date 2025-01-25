import Image from "next/image"


function Features() {
    const features=[{icon:"/assets/icon-access-anywhere.svg",title:"Access your Files anywhere",text:"the ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere"},
        {icon:"assets/icon-security.svg",title:"Security you can trust",text:"2-factor authentication and user controlled encryption are just a couple of the security features we allow to secure your files"},
        {icon:"/assets/icon-collaboration.svg",title:"Real-time collaboration",text:"securely share files and folders with freinds, family and collegues for live collaboration.No email attatchments required"},
        {icon:"/assets/icon-any-file.svg",title:"store any type of file",text:"wheter you 're sharing holidays photos or work documents, Fylo has covered allowing for all file types to be securely stored and shared"},
    ]
return (
    <section className="section-gap">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
            {features.map((feature,index)=>(
                <div className="flex flex-col items-center justify-center text-center m-10" key={index}>
                    <Image
                    className="object-contain"
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    />
                    <h3 className="mt-5 text-white text-2xl md:text-3xl italic font-semibold">{feature.title}</h3>
                    <p className="mt-8 font-normal text-md text-white text-xl w-[360px]">{feature.text}</p>

                </div>
            ))}
            </div>

        </div>
    </section>
)
}

export default Features
