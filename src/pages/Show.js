import { useState } from "react";

function Show(props) {
    const id = props.match.params.id
    const record = props.record
    const album = record.find(p => p._id === id)

    const [editForm, setEditForm] = useState(album);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.updateRecord(editForm, record._id);
        props.history.push("/");
    }

    const removeRecord = () => {
        props.deletePeople(record._id);
        props.history.push("/");
    }
    return (
        <div className="album">
            <img src={record.image} alt={record.name} />
            <h1>{record.name}</h1>
            <h2>{record.band}</h2>
            <button id="delete" onClick={removeRecord}>
        DELETE
      </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Name of Record"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.band}
                    name="band"
                    placeholder="Name of Artist"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Record" />
            </form>
        </div>
    );
};

export default Show;