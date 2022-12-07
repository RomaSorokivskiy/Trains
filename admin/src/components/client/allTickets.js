import {Ticket} from "./ticket";
const AllTickets = ({searchResult}) => {
    return(
        <div className="space-y-[50px]">
            {searchResult.length === 0
                ?<div>No Tickets</div>
                : searchResult.map(ticket => {return(
                    <Ticket key={ticket._id} ticket={ticket}/>
                )
                })}
        </div>
    )
}
export {AllTickets}