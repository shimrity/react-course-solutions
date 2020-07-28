import React , {UseState} from 'react';

export default function UserProfile(props){
    const {userName ,  password, selectedCountry ,selectedCity} =props;
    return (
        <>
        <h1>Hi {userName}</h1>
        <h2>your password is: {password}</h2>
    <    h3>you leav in: {selectedCity} city in {selectedCountry} country  </h3>
        </>
    )
    
}