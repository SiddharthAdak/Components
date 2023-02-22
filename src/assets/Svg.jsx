export const Tailwind = () => {
    return (
        <svg className = "w-[25px] h-[25px] mr-5 my-5 fill-purple" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
    )
}

export const SearchIcon = () => {
    return (
        
        <svg className = "w-[25px] h-[25px] my-[5px]" viewBox="0 0 24.00 22.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="10" cy="10" r="6" stroke="#adadad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M14.5 14.5L19 19" stroke="#adadad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}

export const BellIcon =()=>{
    return(
        <svg style = {{margin: "20px"}} width = "22px" height = "22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 17.5V18.5C9 20.1569 10.3431 21 12 21C13.6569 21 15 20.1569 15 18.5V17.5M5.99999 8.5C5.99999 5.18629 8.68628 3.5 12 3.5C15.3137 3.5 18 5.18629 18 8.5C18 10.4392 18.705 12.6133 19.4316 14.3389C20.0348 15.7717 19.0222 17.5 17.4676 17.5H6.53237C4.97778 17.5 3.96518 15.7717 4.56842 14.3389C5.29493 12.6133 5.99999 10.4392 5.99999 8.5Z" stroke="#adadad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}

export const TickIcon = () => {
    return (
        <svg className = "px-2.5 py-2.5 rounded-full bg-green-100" fill="#4ba155" height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.936 511.936" xmlSpace="preserve" stroke="#4ba155" strokeWidth="30"><g id="SVGRepo_bgCarrier" strokeWidth="10"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#4ba155" strokeWidth="15"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="500.288,61.904 155.888,427.344 11.024,289.376 0,300.96 156.512,450.032 511.936,72.88 "></polygon> </g> </g> </g></svg>
    )
}

export const DownArrow = ({id}) => {
    return(
        <svg className = {id ? "rotate-0" : "group-hover:rotate-180"} id = {id} width = "15px" height = "15px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#808080"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#808080"></path></g></svg>
    )
}