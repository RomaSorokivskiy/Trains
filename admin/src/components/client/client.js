import {useState,useEffect} from "react";
import {Finder} from "./finder";
import {AllTickets} from "./allTickets";
import {getTickets} from "../../http";

const Client = () => {
    const [tickets, setTickets] = useState([])
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        getTickets().then(res => {
            setTickets(res);
            return res
        }).then(res => {
            setSearchResult(res)
        })
    },[])

    const sorting = (col,func) => {
        if(func === 'za') {
            const sorted = [...searchResult].sort((a,b) => b[col].toLowerCase() > a[col].toLowerCase() ? 1 : -1)
            setSearchResult(sorted)
        }else if (func === 'price') {
            const sorted = [...searchResult].sort((a,b) => +a[col] < +b[col]? 1 : -1)
            setSearchResult(sorted)
        }else {
            const sorted = [...searchResult].sort((a,b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
            setSearchResult(sorted)
        }
    }

    return(
        <div className="flex flex-col items-center space-y-[15px]">
            <Finder tickets={tickets} setSearchResults={setSearchResult}/>
            <div>
                <h3>Sort:</h3>
                <div className="flex justify-around w-[150px]">
                    <button onClick={() => sorting('name','az')}>A-Z</button>
                    <button onClick={() => sorting('name', 'za')}>Z-A</button>
                    <button onClick={() => sorting('date', 'date')}>Date</button>
                    <button onClick={() => sorting('price', 'price')}>Price</button>
                </div>
            </div>
            <AllTickets searchResult={searchResult}/>
        </div>
    )
}
export {Client};