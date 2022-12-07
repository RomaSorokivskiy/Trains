import {Context} from "../../index";
import {useContext} from "react";

const AdminTicket = (props) => {
    const {store} = useContext(Context);
    return(
        <form className="flex justify-between items-start flex-col w-[250px] h-[650px] p-[25px] rounded-[25px] bg-[#434242] text-[#F3EFE0] relative">
            <h3>Name: {props.ticket.name}</h3>
            <input type="text" onChange={e => props.ticket.name = e.target.value} defaultValue={props.ticket.name} name="name" className="bg-[#222222] rounded-xl p-[10px]"/>
            <p>Price: {props.ticket.price}$</p>
            <input type="text" onChange={e => props.ticket.price = e.target.value} defaultValue={props.ticket.price}  name="price" className="bg-[#222222] rounded-xl p-[10px]"/>
            <p>Date: {props.ticket.date}</p>
            <input type="date" onChange={e => props.ticket.date = e.target.value} defaultValue={props.ticket.date} name="date" className="bg-[#222222] rounded-xl p-[10px]"/>
            <p>Time: {props.time}</p>
            <input type="time" onChange={e => props.ticket.time = e.target.value} defaultValue={props.ticket.time}  name="time" className="bg-[#222222] rounded-xl p-[10px]"/>
            <p>Place: {props.ticket.placeFrom} => {props.ticket.placeTo}</p>
            <p>From:</p>
            <input type="text" onChange={e => props.ticket.placeFrom = e.target.value} defaultValue={props.ticket.placeFrom} name="placeFrom" className="bg-[#222222] rounded-xl p-[10px]"/>
            <p>To:</p>
            <input type="text" onChange={e => props.ticket.placeTo = e.target.value} defaultValue={props.ticket.placeTo}  name="placeTo" className="bg-[#222222] rounded-xl p-[10px]"/>
            <div className="flex space-x-[12px]">
                <button onClick={()=> {
                    store.updateTicket(props.ticket)
                }}>Edit</button>
                <button onClick={(e) =>
                {
                    store.deleteTicket(props.ticket)}}>Delete</button>
            </div>
        </form>
    )
}
export {AdminTicket}