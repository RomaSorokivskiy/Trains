import {AdminTicket} from "./AdminTicket";

const AllTickets = ({searchResult}) => {
    return(
        <div className="space-y-[50px]">
            {!searchResult
                ?<div>No Tickets</div>
                : searchResult.map(ticket => { return(
                    <AdminTicket  key={ticket._id} ticket={ticket}/>
                )
                })}
        </div>
    )
}
export {AllTickets};