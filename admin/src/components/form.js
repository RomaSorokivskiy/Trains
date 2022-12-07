import {useContext, useState} from "react";
import {Context} from "../index";
const Form = () => {
    const [ticket, setTicket] = useState({
            name: String,
            price: String,
            date: String,
            time: String,
            vip: String,
            placeFrom: String,
            placeTo: String
    })
    const {store} = useContext(Context);

    return(
        <form onSubmit={e => {
                store.createTicket(ticket.name,ticket.price,ticket.date,ticket.time,ticket.placeFrom,ticket.placeTo)
                setTicket(e.target);
        }} className="flex h-[750px] flex-col p-[35px] bg-[#434242] rounded-[15px] text-[#22A39F] space-y-[15px]">
            <label>Name:</label>
            <input type="text" onChange={e => ticket.name = e.target.value} name="name" className="bg-[#222222] rounded-xl p-[10px]"/>
            <label>Price:</label>
            <input type="text" onChange={e => ticket.price = e.target.value} name="price" className="bg-[#222222] rounded-xl p-[10px]"/>
            <label>Date:</label>
            <input type="date" onChange={e => ticket.date = e.target.value} name="date" className="bg-[#222222] rounded-xl p-[10px]"/>
            <label>Time</label>
            <input type="time" onChange={e => ticket.time = e.target.value} name="time" className="bg-[#222222] rounded-xl p-[10px]"/>
            <label>Place From:</label>
            <input type="text" onChange={e => ticket.placeFrom = e.target.value} name="placeFrom" className="bg-[#222222] rounded-xl p-[10px]"/>
            <label>Place To:</label>
            <input type="text" onChange={e => ticket.placeTo = e.target.value} name="placeTo" className="bg-[#222222] rounded-xl p-[10px]"/>

            <input type="submit" value="Create new Ticket" className="cursor-pointer"/>
        </form>

    )
}
export {Form};