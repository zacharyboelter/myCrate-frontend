function Show(props) {
    const id = props.match.params.id
    const record = props.record
    const album = record.find(p => p._id === id)

    return (
        <div className="album">
            <img src={album.image} alt={album.name} />
            <h1>{album.name}</h1>
            <h2>{album.band}</h2>
        </div>
    );
};

export default Show;