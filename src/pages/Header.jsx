import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div style={{height:"80px" }}>
        <ul style={{listStyle:"none",display:"inline-block" }}>
          <li style={{display:"inline-block" ,padding:"10px" }}>
            <NavLink to="/" style={{textDecoration:"none"}} >
              Create Entity
            </NavLink>
          </li>
          <li style={{display:"inline-block", padding:"10px"}}>
            <NavLink to="/info"  style={{textDecoration:"none"}}>
              Info
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Header