'use client'
import Image from "next/image"
import Link from "next/link"
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa"

function Footer() {
    const contact = [
        { icon: "/assets/icon-phone.svg", text: "015147892051" },
        { icon: "/assets/icon-email.svg", text: "test@fylo.com" },
    ];

    const items = [
        "About Us", "Jobs", "Press", "Blog", "Contacts", "Terms", "Privacy"
    ];

    const socialIcons = ["facebook", "twitter", "instagram"];

    return (
        <section className="section-gap bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
            <div className="container">
                <Link href="/">
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={175}
                        height={60}
                    />
                </Link>
                <div className="mt-[30px] ml-2 flex justify-between flex-wrap flex-col lg:flex-row gap-16">
                    <div className="flex items-center gap-[15px] w-[340px] max-w-full">
                        <Image
                            src="/assets/icon-location.svg"
                            alt="location"
                            width={18}
                            height={18}
                            className="object-contain"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quae mollitia fugiat adipisci laborum obcaecati, 
                            nam dolorum distinctio recusandae ex laudantium eius excepturi reprehenderit quas dolorem perferendis voluptate a fuga.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 mb-4">
                        {contact.map((item) => (
                            <div key={item.text} className="flex gap-4">
                                <Image src={item.icon} alt="icon" width={18} height={18} className="object-contain" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {items.map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:text-[#8cdae4] text-base transition-colors duration-200">{item}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-4 w-full justify-center md:w-auto">
                        {socialIcons.map((icon) => (
                            <li key={icon}>
                                <Link href="#" className="group">
                                    <div className="w-[40px] h-[40px] flex items-center justify-center border-white rounded-full">
                                        {icon === "facebook" ? <FaFacebookF className="group-hover:text-[#8cdae4]" /> :
                                            icon === "twitter" ? <FaTwitter className="group-hover:text-[#8cdae4]" /> :
                                                <FaInstagram className="group-hover:text-[#8cdae4]" />}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
