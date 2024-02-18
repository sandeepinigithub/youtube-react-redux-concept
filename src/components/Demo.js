import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCountry } from '../store/countrySlice';

export default function Demo() {
    const countryId = useSelector((state) => state?.country?.id)
    const dispatch = useDispatch();

    const handleCountryChange = (value) => {
        const country = countryList?.find((country) => country?.id == value);
        dispatch(updateCountry(country));
    }

    const countryList = [
        {
            id: 1,
            name: 'India',
            states: [
                {
                    id: 101,
                    name: 'India A'
                },
                {
                    id: 102,
                    name: 'India B'
                },
            ]
        },
        {
            id: 2,
            name: 'China',
            states: [
                {
                    id: 201,
                    name: 'China A'
                },
                {
                    id: 202,
                    name: 'China B'
                },
            ]
        },
    ]
    return (
        <>
            <div>Demo (react-redux and @reduxjs/toolkit)</div>
            <select value={countryId} onChange={(e) => handleCountryChange(parseInt(e.target.value))}>
                <option name='select country' value={0}>Select Country</option>
                {
                    countryList && countryList?.map((country) => (
                        <option key={country?.id} value={country?.id}>{country?.name}</option>
                    ))
                }
            </select>
        </>
    )
}
