import React, { useEffect, useState } from "react";
import Axios from "axios";

import LocationCard from "./LocationCard";

import { Container, Row } from "reactstrap";

export default function LocationList() {
    const [location, setLocation] = useState([]);
    const [LocationQuery, setLocationQuery] = useState("");

    const handleChange = event => {
        setLocationQuery(event.target.value);
    };

    useEffect(() => {
        Axios.get("https://rickandmortyapi.com/api/location/")
            .then(res => {
                console.log(res.data);
                const locations = res.data.results.filter(loc =>
                    loc.name.toLowerCase().includes(LocationQuery.toLowerCase())
                );
                setLocation(locations);
                console.log(locations);
            })
            .catch(error => console.log('Data Not Returned: Error ', error));
    }, [LocationQuery]);

    return (
        <Container>
            <form className="searchBar">
                <input
                    type="text"
                    onChange={handleChange}
                    value={LocationQuery}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="search by location"
                    autoComplete="off"
                />
            </form>

            <Row>
                {location.map(loc => {
                    return (
                        <LocationCard
                            name={loc.name}
                            type={loc.type}
                            dimension={loc.dimension}
                            id={loc.episidode}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}
