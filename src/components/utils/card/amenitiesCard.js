import classes from "./card.module.css";

export default function AmenitiesCard(props) {
  return (
    <div className={`${classes.card} ${props.cardClassName} mx-auto text-center`}>
      <div className={`${classes.card_header}`}>{props.imgHeader}</div>
      <div className={`${classes.card_body}`}>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
