function LoginBtn() {
    return (
        <button className="flex items-center self-start gap-2 border-2 border-orange-600 py-1 px-3 rounded-xl bg-orange-400 text-white hover:bg-orange-600 transition">
            <span className="text-lg">Login </span>
            <i className="fa-solid fa-arrow-right"></i>
        </button>
    )
}

export default LoginBtn;