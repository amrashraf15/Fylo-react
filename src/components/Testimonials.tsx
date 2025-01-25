import Image from "next/image"


function Testimonials() {
    const testimonials=[
        {text:"Fylo has improved our team productivity by an order of magnitude. since making the switch out team has become a well-olled collaboration machine",image:"/assets/profile-1.jpg",name:"Satchi Patel",compony:"Founder & CEO Huddle"},
        {text:"Fylo has improved our team productivity by an order of magnitude. since making the switch out team has become a well-olled collaboration machine",image:"/assets/profile-2.jpg",name:"Bruce  Mckenzie",compony:"Founder & CEO Huddle"},
        {text:"Fylo has improved our team productivity by an order of magnitude. since making the switch out team has become a well-olled collaboration machine",image:"/assets/profile-3.jpg",name:"Iva Boyd",compony:"Founder & CEO Huddle"},  
    ]
return (
    <section className="section-gap mb-20">
        <div className="container mx-4 relative ">
            <Image
            src="/assets/bg-quotes.png"
            alt="quotes"
            className="absolute left-[20px] top-[-15px]"
            width={30}
            height={30}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white m-4 items-center z-20">
                {testimonials.map((test,index)=>(
                    <div key={index} className="border-none pb-2  rounded-lg bg-[#21293c] shadow-md w-full p-2">
                        <p className="px-2 flex flex-wrap">{test.text}</p>
                        <div className="flex ">
                        <Image src={test.image} alt={test.name} className="rounded-full mt-2" width={40} height={30}/>
                        <div className="flex flex-col ml-4 mt-2">
                            <span className="text-xl">{test.name}</span>
                            <span className="text-sm">{test.compony}</span>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
)
}

export default Testimonials
