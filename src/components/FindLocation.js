import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from "@material-ui/core";
import { Button } from 'react-mdl';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import './FindLocation.css';

export default function FindLocation({ theme, place, location, changeState, handlePlace, handleLocation }) {
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        handlePlace(value);
        handleLocation(latLng);
        changeState(4);
    };

    const onClick = () => {
        handlePlace('');
        handleLocation({});
        changeState(4);
    }

    const updatePlace = (e) => {
        const place = e.target.value;
        // getLocation(place)
        handlePlace(place);
    }

    const className = 'location-item';
    return (
        <div className="find-location">
            <MuiThemeProvider theme={theme}>
                <Button
                    onClick={onClick}
                    id="location-back-button"
                ><i
                    id="back-arrow"
                    className="fa fa-arrow-left"
                    aria-hidden="true"
                ></i>
                </Button>
                <PlacesAutocomplete
                    value={place}
                    onChange={handlePlace}
                    onSelect={handleSelect}
                >

                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="enter-location">
                            <TextField {...getInputProps({ placeholder: "Set Location" })} />

                            <div>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map(suggestion => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#f0f0f0" : "#fff",
                                        className: 'location-item-list'
                                    };

                                    return (
                                        <div  {...getSuggestionItemProps(suggestion, { className, style })}>
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
    )
}
