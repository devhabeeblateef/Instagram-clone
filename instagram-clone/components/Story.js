function Story({img, username}) {
    return (
        <div>
            <img 
            className="h-14 w-14 rounded-full border-red-500 
            border-2 p-[1.5px] object-contain cursor-pointer hover:scale-110
            transition transform duration-300 ease-out"
            src="https://images.unsplash.com/file-1635809686961-0440cea0b2fdimage" alt="Dumb Image for now"/>
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story
