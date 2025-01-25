

function GetStarted() {
return (
    <div className="container relative ">
        <div className="flex flex-col justify-center items-center absolute left-[50%] translate-x-[-50%] top-[-75px] z-10  py-4  min-h-[275px] text-white mb-8 bg-[#1c2230]">
            <h2 className="text-4xl font-semibold">Get Early access today</h2>
            <p className="px-8">It only takes a minute to sign uo and our free starter tier is extremely generious.
                if you have any questions, our support team would be happy to help you
            </p>
            <form className="w-full flex flex-wrap items-center gap-8 mt-2">
                <input className="w-full text-black md:flex-1 mx-3 h-[40]  rounded-full px-6" placeholder="test@example.com" type="email" />
                <button type="submit" className="w-full md:w-[200px] btn mr-4 rounded-full px-3 py-2">Get Started For Free</button>
            </form>
        </div>
    
    </div>
)
}

export default GetStarted
