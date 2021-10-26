import { useState } from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    Card: {
        width: 300,
        margin: 'auto'
    },
    CardMedia: {
        height: 550,
        width: '100%',
        objectFit: 'cover'

    }
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
        <div>
            <Card className={classes.card}>
                <CardMedia>
                    <img src={album.image} alt={album.name} />
                </CardMedia>
                <h1>{album.name}</h1>
                <h2>{album.band}</h2>
            </Card>
            <br />
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