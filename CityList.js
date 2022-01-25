import React from "react";

const CityList = (props) => {
    let cityDetails = props.my_JSON[0].destination_addresses.map((e) => {
        return (
            <tr>
                <td className="city">{e}</td>
            </tr>
        );
    });
    let cityDistance = props.my_JSON[0].rows[0].elements.map((e) => {
        return (
            <tr>
                <td>{e.distance.duration.text}</td>
            </tr>
        );
    });
    let cityTravel = props.my_JSON[0].rows[0].elements.map((e) => {
        return (
            <tr>
                <td>{e.distance.text}</td>
            </tr>
        );
    });
    return (
        <div className="container">
            <table>
                <tr className="bg-col">
                    <th>City Name</th>
                    <th>Real Travel Time</th>
                    <th>My City Distance</th>
                </tr>
                <tr className="bg-content">
                   <td> {cityDetails}</td>
                    <td>{cityDistance}</td>
                    <td>{cityTravel}</td>
                </tr>

            </table>
        </div>
    );
};
export default CityList;
