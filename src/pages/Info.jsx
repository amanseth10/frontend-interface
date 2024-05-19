import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Info() {
    const [head, sethead] = useState([])
    const [body_deail, setBody] = useState([]);      

    useEffect(() => {
        axios.get("https://internproject-4m4h.onrender.com/get-head/")
        .then((res) => {
            sethead(res.data);
            // console.log(res.data);
        })
        .catch((error) => { console.log(error);})
    }, [])


    useEffect(() => {
        axios.get("https://internproject-4m4h.onrender.com/get-data/")
            .then((res) => {
                setBody(res.data);
                // console.log(res.data);
            })
            .catch((error) => { console.log(error); });
    }, [])
    const handleDelete = async (id) => {
        try {
            await axios.delete("https://internproject-4m4h.onrender.com/delete/" + id)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Link to="/create" style={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black" }}> Add+</Link>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "yellow" }}>

                <table>
                    <thead>
                        <tr>
                            {

                                head.map((val, i) => i == 0 ? "" : <th style={{ padding: "20px", margin: "20px" }} key={i}>{val["Field"]}</th>)
                            }
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            body_deail.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        {

                                            head.map((x, j) => {
                                                return (
                                                    j == 0 ? "" :

                                                        <td key={j} style={{ padding: "20px", margin: "20px" }}>
                                                            {val[x["Field"]]}
                                                        </td>

                                                )
                                            })}
                                        <td><Link to={`/update/${val["id"]}`} style={{ border: "solid black1px ", textDecoration: "none", margin: "5px", background: "blue", color: "white" }}>Update</Link></td>
                                        <td><button style={{ border: "solid black1px ", textDecoration: "none", margin: "5px", background: "Red", color: "white" }} onClick={() => { handleDelete(`${val["id"]}`) }}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Info