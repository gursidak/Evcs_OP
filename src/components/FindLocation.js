import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from "@material-ui/core";
import { Button } from 'react-mdl';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import CircularProgress from "@material-ui/core/CircularProgress";
import uniqid from 'uniqid';
// import Map from './Map'
import './FindLocation.css';



export default function FindLocation({ theme, place, location, changeState, handlePlace, handleLocation, useGPS, handleUseGPS }) {
    const [name, setName] = useState('');

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        handlePlace(value);
        handleLocation(latLng);
        handleUseGPS(false);
        changeState(5);
    };

    const onClick = () => {
        handlePlace('');
        handleLocation({});
        handleUseGPS(true);
        changeState(7);
    }
    const className = 'location-item';
    return (
        <>
            <div className="sign-in-form">
                <div class="location-search-box">
                    <MuiThemeProvider theme={theme}>
                        <Button
                            onClick={onClick}
                        // id="location-back-button"
                        ><KeyboardBackspaceRoundedIcon />
                        </Button>

                        <PlacesAutocomplete
                            // key={id}
                            value={name}
                            onChange={setName}
                            onSelect={handleSelect}
                        // shouldFetchSuggestions={place.length > 1}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div >
                                    <TextField {...getInputProps({ placeholder: "Search Your Location" })} />
                                    {loading ? <div key={uniqid}><CircularProgress /></div> : null}
                                    <div>
                                        {suggestions.map(suggestion => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#f0f0f0" : "#fff",
                                            };

                                            return (
                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                    <div id="main-text">
                                                        {suggestion.formattedSuggestion.mainText}
                                                    </div>
                                                    <div id="secondary-text">
                                                        {suggestion.formattedSuggestion.secondaryText}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </MuiThemeProvider>
                </div>
            </div>
        </>
    )
}
