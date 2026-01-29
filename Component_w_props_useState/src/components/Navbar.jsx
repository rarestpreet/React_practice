import QuickLink from "./QuickLinks";
import BrandContainer from "./BrandContainer";
import { useState } from "react";
import MenuBtn from "./MenuBtn";

function Navbar() {
    let [open, setOpen] = useState(false);

    const toggleState = () => setOpen(state => !state);

    return (
        <nav className="bg-gray-100 shadow-lg  shadow-gray-200">
            <div className="md:hidden mobile-navbar-container ">
                <div className=" p-5 flex items-center justify-between">
                    <BrandContainer />
                    <MenuBtn state={open} toggle={toggleState}/>
                </div>
                {
                    open &&
                    <div className="flex flex-col gap-5 p-5 pt-2 ">
                        <div className="flex flex-col items-start gap-6">
                            <QuickLink page="Home" />
                            <QuickLink page="Pricing" />
                            <QuickLink page="About us" />
                        </div>
                        <div className="h-px bg-black"></div>
                        <div className="flex gap-2 items-center">
                            <span className="text-lg font-medium">
                                Login
                            </span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                }
            </div >
            <div className="hidden navbar-container p-5 md:flex items-center justify-between">
                <BrandContainer />
                <div className="flex items-center gap-6">
                    <QuickLink page="Home" />
                    <QuickLink page="Pricing" />
                    <QuickLink page="About us" />
                </div>
                <div>
                    <button className="flex justify-center items-center border rounded-xl py-1 px-2">
                        Login
                    </button>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;