import { useParams } from "react-router-dom";


function NewRoll(){
    let { rollId } = useParams();
    return <div>new roll</div>
}

export default NewRoll