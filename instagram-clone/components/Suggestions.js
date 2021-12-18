import { useEffect, useState } from "react"
import faker from "faker"

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect( () =>
    {
        const suggestions = [...Array(5)].map((_, i) =>(
            {
                ...faker.helpers.contextualCard(),
                id: i,
            }
        ));
        setSuggestions(suggestions);
    }, []);
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
              <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See All</button>
        </div>
        {
            suggestions.map((profile) =>(
                <div 
                key={profile.id}
                className="flex items-center justify-between mt-3">
                    <img className="w-10 h-10 rounded-full border p-[2px]"
                     src="https://images.unsplash.com/file-1635809686961-0440cea0b2fdimage" 
                     alt="profilepic_side" />

                     <div>
                         </div>
                     </div>
            ))}
        </div>
    )
}

export default Suggestions
