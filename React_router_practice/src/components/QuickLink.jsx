function QuickLink({ pageName, screen }) {
    const hoverClass =
        screen === "sm" ? "hover:translate-x-1" : "hover:scale-110";

    return (
        <a href="#" className={`text-lg ${hoverClass} transition duration-300`}>{pageName}</a>
    )
}

export default QuickLink;