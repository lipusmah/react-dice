import { useParams } from "react-router-dom";


function Game(){
    let { gameId } = useParams();
    return <div>game: {gameId}</div>
}

export default Game