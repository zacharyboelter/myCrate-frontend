import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import { Grid } from '@material-ui/core';

function Main(props) {
    const [record, setRecord] = useState(null);

    const URL = "https://mycrate.onrender.com/record/";

    const getRecord = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setRecord(data);
    };

    const createRecord = async (album) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(album),
        });
        getRecord();
    };

    const updateRecord = async (album, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(album),
        });
        getRecord();
    }

    //DELETE
    const deleteRecord = async id => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getRecord();
    }

    useEffect(() => getRecord(), []);


    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Grid conatiner direction="row">
                        <Grid item >
                            <Index record={record} createRecord={createRecord} />
                        </Grid>
                    </Grid>
                </Route>
                <Route
                    path="/record/:id"
                    render={(rp) => (

                        <Show
                            record={record}
                            updateRecord={updateRecord}
                            deleteRecord={deleteRecord}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;