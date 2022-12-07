import {FaSearch} from "react-icons/fa"


const Finder = ({tickets, setSearchResults}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleSearchChange = (e) => {
        if(!e.target.value) {
            setSearchResults(tickets)
        }
        const resultArray = tickets.filter(ticket => ticket.name.includes(e.target.value) || ticket.date.includes(e.target.value))

        setSearchResults(resultArray)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearchChange}/>
                <button>
                    <FaSearch/>
                </button>
            </form>
        </div>

    )
}

export {Finder}