import classes from "./ErrorModal.module.css";
import Card from "./Card"
import Button from "./Button"
import ReactDom from "react-dom"

const ErrorModal = (props) => {

  const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  }

  const ModalOverlay = props => {
     return <Card className={classes.modal}>
        <header />
        <h2>{props.title}</h2>
        <header className={classes.header} />
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>;
  }

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal