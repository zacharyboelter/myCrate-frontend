import { useState } from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

});


function Show(props) {
    const classes = useStyles();

    
    const id = props.match.params.id
    const record = props.record
    const album = record.find(p => p._id === id)

    const [editForm, setEditForm] = useState(album);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.updateRecord(editForm, album._id);
        props.history.push("/");
    }

    const removeRecord = () => {
        props.deleteRecord(album._id);
        props.history.push("/");
    }
    return (
        <div className="album">
            <img src={album.image} alt={album.name} />
            <h1>{album.name}</h1>
            <h2>{album.band}</h2>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image url"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    value={editForm.band}
                    name="band"
                    placeholder="band"
                    onChange={handleChange}
                />
                <br />
                <Button variant="outlined" color="" type="submit" value="Update Record" >Update Record </Button>
                <Button variant="outlined" color="secondary" id="delete" onClick={removeRecord}>
                DELETE
            </Button>
            </form>
        </div>
    );
};

export default Show;