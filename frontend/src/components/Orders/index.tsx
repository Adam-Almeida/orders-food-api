import { Board } from "../Board";
import { Container } from "./style";
import alarm from "../../assets/images/alarm.png";
import fried from "../../assets/images/fried.png";
import checkmark from "../../assets/images/checkmark.png";

export function Orders() {
    return (
        <Container>
            <Board icon={alarm} title="Fila de Espera" quantity={1}/>
            <Board icon={fried} title="Em Preparo" quantity={1}/>
            <Board icon={checkmark} title="Pronto!" quantity={1}/>
        </Container>
    );
}
