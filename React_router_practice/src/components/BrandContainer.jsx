import logo from "../assets/asset0.png"

function BrandContainer() {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="company-logo"></img>
            <span className="text-lg font-medium">Company name</span>
        </div>
    )
}

export default BrandContainer;