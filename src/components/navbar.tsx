import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <nav className=" z-10 fixed top-0 bg-white px-16 py-4 items-center shadow-sm  w-full">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-black font-bold text-md">Akash Kumar</h3>
                </div>

                <div className="flex gap-8 items-center">
                    <p className="text-black font-bold text-md "><a href="#">Home</a></p>
                    <p className="text-black font-bold text-md "><a href="#about">About</a></p>
                    <p className="text-black font-bold text-md "><a href="#projects">Projects</a></p>
                    <p className="text-black font-bold text-md "><a href="#contact">Contact</a></p>
                    <div>
                        <Button variant="default" size="sm" className="text-white" ><span className="motion-safe:animate-pulse">Hire me</span></Button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;