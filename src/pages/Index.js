import { useState } from "react";
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';


function Index(props) {

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
        console.log("hello world");
        return props.record.map((album) => (

            <div key={album._id} className="album">
                <img src={album.image} alt={album.name} />
                <Link to={`/record/${album._id}`}><h1>{album.name}</h1></Link>
                <h3>{album.band}</h3>
            </div>
        ));
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
            {props.record ? loaded() : loading()}
        </section>
    );
}

export default Index;