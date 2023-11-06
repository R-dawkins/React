import { Link, Outlet } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="navbar">
      <Link className="menu" to="/">종합</Link>
      <Link className="menu" to="/realtime">실시간</Link>
      <Link className="menu" to="/day">일별</Link>
      <Link className="menu" to="/monthweek">월별/주별</Link>
      <Link className="menu" to="/hotprice">특가</Link>
      <Link className="menu" to="/steady">스테디셀러</Link>
    </nav>
  );
}