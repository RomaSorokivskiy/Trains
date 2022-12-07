import {Routes, Route} from "react-router-dom";

import {Layout} from "./layout";
import {Admin} from "./admin/admin";
import {Client} from "./client/client";
const App = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="client" element={<Client/>}></Route>
                </Route>
            </Routes>
        </>
    )
}
export {App};