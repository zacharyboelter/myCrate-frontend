import { useState } from "react";
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    Card: {
        width: 300,
        height: 600,
        margin: 'auto'
    },
    CardMedia: {
        height: 550,
        width: '100%',
        objectFit: 'cover'

    }
}))

function Index(props) {
    const classes = useStyles();

    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        band: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createRecord(newForm);
        setNewForm({
            name: "",
            image: "",
            band: "",
        });
    };

    const loaded = () => {

        return (
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                >

                    {props.record.map((album) => (
                        <Grid item xs={12} sm={4} m={3} display="flex">
                            <Card className={classes.card} sx={{ maxWidth: 345 }}>
                                <div key={album._id} className="album">
                                    <CardMedia className={classes.image}>
                                        <img src={album.image} alt={album.name} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <Link to={`/record/${album._id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}><h1>{album.name}</h1></Link>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <h3>{album.band}</h3>
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardActions>
                                    <Button size="small" style={{ color: 'inherit', textDecoration: 'inherit' }}>Share</Button>
                                    <Button size="small"><Link to={`/record/${album._id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>Learn More</Link></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    };
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name of Album"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    value={newForm.band}
                    name="band"
                    placeholder="Name of Artist"
                    onChange={handleChange}
                />
                <br />
                <Button color="primary" type="submit" value="Add Record" variant="outlined"> Add Record </Button>
            </form>
            <hr />
            {props.record ? loaded() : loading()}
        </section>
    );
}

export default Index;