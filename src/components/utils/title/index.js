export default function Title({children, ...reset}) {
    return (
        <h2 className="mainTitle" {...reset}>{children}</h2>
    )
};
