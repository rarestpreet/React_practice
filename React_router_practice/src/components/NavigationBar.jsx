import { useState } from "react";
import BrandContainer from "./BrandContainer";
import QuickLinkContainer from "./QuickLinkContainer";
import LoginBtn from "./LoginBtn";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div id="md-navbar" className="hidden md:flex justify-between items-center py-4 px-5 shadow-lg shadow-gray-200">
                <BrandContainer />
                <QuickLinkContainer flexState="flex-row" gap={10} screen="md" />
                <LoginBtn />
            </div>
            <div id="sm-navbar" className="md:hidden flex flex-col gap-5 shadow-lg shadow-gray-200 py-4">
                <div className="flex items-center justify-between px-4">
                    <BrandContainer />
                    {!isOpen && <i className="fa-solid fa-bars text-lg" onClick={() => {
                        setIsOpen(open => !open);
                    }}></i>}
                    {isOpen && <i className="fa-solid fa-xmark text-lg" onClick={() => {
                        setIsOpen(open => !open);
                    }}></i>}
                </div>
                {isOpen &&
                    <div className="flex flex-col gap-6 px-6">
                        <QuickLinkContainer flexState="flex-col" gap={6} screen="sm" />
                        <div className="w-full h-px bg-gray-400"></div>
                        <LoginBtn />
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;