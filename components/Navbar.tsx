
import Image from "next/image";
import Link from 'next/link';
import "../app/styles/navbar.css";
import logo from "../img/sampleLogo.png";

const Navbar = () => {
    return (
        <div className="px-5 flex justify-between" id="navbar">
            <div className="py-2 px-5 flex justify-content">
                <Link href='/'>
                    <Image src={logo} alt='sampleLogo' width={40}></Image>
                </Link>
                <div className="text-green-700 text-xl font-semibold">
                    MyGeoServe
                </div>
            </div>
            <div className="px-5 flex justify-content">
                <Link href='/'>
                    <div>BM</div>
                </Link>
                <div className="border-l border-gray-300 h-6 mx-2"></div>
                <Link href='/'>
                    <div>ENG</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;