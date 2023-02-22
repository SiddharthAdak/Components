import { NavLink } from "react-router-dom";
import { DownArrow } from '../assets/Svg';
function NavDrop({options, id, name}) {
    
    
    
    return (
        <div className = " group max-w-[200px]">
            <div className = "flex relative items-center justify-between px-5 py-2 w-full cursor-pointer md2:p-2">
                <div className = "text-ellipsis mr-1 relative text-gray-600">{name}</div>
                <DownArrow />
            </div>
            <div className = "pt-4 absolute cursor-pointer md2:left-full md2:pt-0 md2:top-0">
            <div id = {id} className = "  bg-white z-[3] hidden group-hover:block shadow-[0px_0px_5px_0px_rgba(158,157,157)] w-[200px] rounded-md overflow-hidden md2:w-[130px]">


            {options.map((element)=>{
                        return <NavLink 
                        className={({ isActive }) =>
                            isActive ? 'active navdrop-navlink' : 'navdrop-navlink'
                        }
                         to = {element} key = {element}>{element}</NavLink>
                    })}
            </div>
            </div>
        </div>
    )
}

export default NavDrop
