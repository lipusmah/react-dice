import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Game, addGame } from "../db";
import { useState } from "react";

function NewGame() {

    const [payload, setPayload] = useState<Partial<Game>>({
        title: "",
        numberOfDice: 1
    });
    
    const onTextChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setPayload({
            ...payload,
            title: ev.target.value
        })
    };
    const onSelectChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setPayload({
            ...payload,
            numberOfDice: Number(ev.target.value)
        })
    };
    const onSubmit = async () => {
        const game = {
            ...payload,
            created: Date.now(),
            rolls: [],
        }
        await addGame(game);
        console.log(payload);
    }

    return <div>
        <h3>Create new game</h3>
        <div className="game-form">

            <TextField onChange={onTextChange} value={payload.title} id="game-title" label="Title" variant="outlined" />
            <FormControl>
                <InputLabel id="game-dice-label" >Number of dice</InputLabel>

                <Select
                    labelId="game-dice-label"
                    id="game-dice"
                    value={payload.numberOfDice}
                    onChange={onSelectChange}
                    label="Number of dice"
                >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                </Select>
            </FormControl>

            <Button size="large" variant="contained" startIcon={< AddIcon/>} onClick={onSubmit}>Create game</Button>
        </div>


    </div>
}

export default NewGame