import {Outlet, Link} from "react-router-dom";
import {TbTrain} from "react-icons/tb";
const Layout = () => {
    return (
        <>
            <header>
                <div className="flex justify-evenly bg-[#222222] text-[#F3EFE0]">
                    <h3 className="flex items-center">Travel by Ukraine<TbTrain className="ico"/></h3>
                    <div className="space-x-[25px]">
                        <Link to="/admin">
                            <button>Admin Page</button>
                        </Link>
                        <Link to="/client">
                            <button>Client Page</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="flex justify-center items-center main p-[35px]">
                <Outlet/>
            </div>

            <footer>
                <div className="flex justify-evenly bg-[#222222] text-[#F3EFE0]">
                    <p className="w-[150px]">Web app by Sorokivskyi Roman aka SorokSkull</p>
                    <p className="w-[150px]">Thank you for checking my works! See you next time!</p>
                </div>
            </footer>
        </>
    )
}
export {Layout};