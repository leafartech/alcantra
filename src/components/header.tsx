export default function Header() {
    return (
        <header className="relative min-h-screen w-full flex items-center justify-center px-1">
            <img src="/images/bg.png" alt="" className="absolute top-0 left-0 h-full object-cover -z-10" />
            <div className="relative z-50 max-w-6xl w-full flex items-center justify-center">
                <div className="absolute sm:left-0 hidden sm:block">
                    <img src="/images/logo.png" alt="" className="w-24" />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src="/images/logo.png" alt="" className="w-12 sm:hidden " />
                    <p className="rounded-full py-2 px-4 text-black bg-white text-2xl serif ">Alcântara <span className="text-[#A12A2A]">Rockets</span> Base</p>
                    <h1 className="text-white text-4xl sm:text-6xl serif text-center italic">Transformando visões <br />em realidade</h1>
                    <img src="/images/dardo.png" alt="" className="w-72 absolute -bottom-20" />
                </div>
            </div>
        </header>
    )
}