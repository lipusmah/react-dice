import { useParams } from "react-router-dom";


function Roll(){
    let { rollId } = useParams();
    return <div>{rollId}</div>
}

export default Roll