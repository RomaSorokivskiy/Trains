

const Ticket = (props) => {
    return (
        <div key={props._id} className="flex justify-between items-start flex-col w-[250px] h-[250px] p-[25px] rounded-[25px] bg-[#434242] text-[#F3EFE0]">
            <h3>Change: {props.ticket.name}</h3>
            <p>Price: {props.ticket.price}$</p>
            <p>Date: {props.ticket.date}</p>
            <p>Time: {props.ticket.time}</p>
            <p>Place: {props.ticket.placeFrom} => {props.ticket.placeTo}</p>
        </div>
    )
}
export {Ticket}