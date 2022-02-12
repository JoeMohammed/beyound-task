import { Link } from "react-router-dom";

export default function MainBtn({ children, ...reset }) {
  return (
    <Link className="mainBtn" {...reset}>
      {children}
    </Link>
  );
}
