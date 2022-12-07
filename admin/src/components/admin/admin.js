import {Form} from "../form";
import {AllTickets} from "./AllTickets";
import {Finder} from "../client/finder";
import {useEffect, useState} from "react";
import {getTickets} from "../../http";

const Admin = () => {
    const [tickets, setTickets] = useState([]);
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        getTickets().then(res => {
            setTickets(res)
            return res
        }).then(res => {
            setSearchResult(res)
        })
    }, [])
    return(
        <div className="flex w-full justify-evenly">
            <Form/>
            <Finder tickets={tickets} setSearchResults={setSearchResult}/>
            <AllTickets searchResult={searchResult}/>
        </div>
    )
}

export {Admin};