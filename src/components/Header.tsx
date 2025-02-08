"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function Header() {
    const Links = [
        { id: crypto.randomUUID(), title: "Features", href: "#" },
        { id: crypto.randomUUID(), title: "Team", href: "#" },
        { id: crypto.randomUUID(), title: "Sign In", href: "#" },
    ];

    const [openmenu, setOpenmenu] = useState(false);

    const navbartoggle = () => {
        setOpenmenu(!openmenu);
    };

    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 100) {
                    headerRef.current.style.background = "#0c1524";
                    headerRef.current.style.padding = "20px 0";
                } else {
                    headerRef.current.style.background = "transparent";
                    headerRef.current.style.padding = "60px 0";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 pt-[60px] transition-all duration-200"
        >
            <nav className="flex justify-between">
                <div className="px-5">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={80}
                        height={70}
                    />
                </div>
                <div className="text-white hidden lg:flex mr-10 px-5 text-2xl">
                    {Links.map((link) => (
                        <a
                            className="mx-6 hover:text-[#65e2d9]"
                            key={link.id}
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <button
                    onClick={navbartoggle}
                    className="lg:hidden text-white text-xl absolute top-3 right-3 mx-5 my-5"
                >
                    {openmenu ? <X /> : <Menu />}
                </button>
                {openmenu && (
                    <div className="mt-20 mx-auto">
                        <div className="my-12 flex flex-col justify-center items-center">
                            {Links.map((link) => (
                                <a
                                    className="text-2xl text-white my-6"
                                    key={link.id}
                                    href={link.href}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={navbartoggle}
                            className="lg:hidden text-white text-xl absolute top-3 right-3 mx-5 my-5"
                        >
                            {openmenu ? <X /> : <Menu />}
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
