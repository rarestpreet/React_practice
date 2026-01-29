function MenuBtn({ state, toggle }) {
    return (
        <button className="cursor-pointer rounded-full hover:bg-gray-200 w-8 h-8"
        onClick={toggle}>
            <i className={`fa-solid fa-${state ? "xmark" : "bars"}`}></i>
        </button>
    )
}

export default MenuBtn;