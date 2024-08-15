import Image from "next/image";
import "../app/styles/sidebar.css";
import userPic from "../img/sampleUserPic.jpeg";

const session = {
    name: "DAHLIA NUR NAYLA BINTI MUSA", 
    position: "Penolong Pengarah Ukur", 
    jobscope:"PENGURUSAN WEB PORTAL ANALITIK", 
    subJobscope:"Dashboard Web Portal",
    bidang: "PENTADBIRAN",
    subBidang: {
        pengguna: "Pengguna",
        contentManagementSystem: "contentManagementSystem",
        pengurusanAduan: "Pengurusan Aduan",
        pengurusanDanPendaftaranResourcesKatalog: "Pengurusan Dan Pendaftaran Resources Katalog",
        pengurusanAplikasi: "Pengurusan Aplikasi",
        PengurusanMasterData: "Pengurusan Master Data",
        senaraiBelianPeta: "Senarai Belian Peta",
        auditTrail: "Audit Trail"
    }
};
const Sidebar = () => {
    return (
        <aside id="sidebar" className="w-[300px] pt-3 pl-5 pr-5 h-screen">
            <header className="flex flex-col items-center">
                <Image src={userPic} alt='sampleLogo' width={50} className="relative rounded-full overflow-hidden flex items-center justify-center bg-gray-200"></Image>
                <h2 className="text-blue-700 font-semibold mt-2">{session.name}</h2>
                <p className="font-semibold mt-1">{session.position}</p>
            </header>
            <div className="mt-20 sub-title">
                <div className="text-xl">{session.jobscope}</div>
                <div className="flex">
                    <ul>
                        <div className="w-[2px] bg-gray-300"></div>
                        <li className="border-l h-20 border-gray-300 mt-2 pl-2 text-grey-300">{session.subJobscope}</li>
                    </ul>
                </div>
            </div>
            <div className="mt-5">
                <div className="text-xl">{session.jobscope}</div>
                <div className="flex">
                    <div className="w-[2px] bg-gray-300"></div>
                    <ul className=" flex flex-col">
                        <li className="py-2 px-4  border-gray-300">
                            {session.subBidang.pengguna}
                        </li>
                        <li className="py-2 px-4 border-gray-300">
                            {session.subBidang.pengurusanAduan}
                        </li>
                        <li className="py-2 px-4 border-gray-300">
                            {session.subBidang.pengurusanDanPendaftaranResourcesKatalog}
                        </li>
                        <li className="py-2 px-4 border-gray-300">
                            {session.subBidang.pengurusanAplikasi}
                        </li>
                        <li className="py-2 px-4 border-gray-300">
                            {session.subBidang.PengurusanMasterData}
                        </li>
                        <li className="py-2 px-4 border-gray-300">
                            {session.subBidang.senaraiBelianPeta}
                        </li>
                        <li className="py-2 px-4 border-gray-300 h-20">
                            {session.subBidang.auditTrail}
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;