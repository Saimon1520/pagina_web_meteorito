import React, { useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
//import { PROPERTY_ID, CLIENT_ID } from '../from_somewhere';

const GoogleAnalyticsApp = () => {
    const propertyId = "415896003";
    const startDate = "2023-08-00";
    const endDate = "2024-02-10";

    const googleLogin = useGoogleLogin({
        clientId: "798495697820-e3ietj94l0jo5rng7gmvla5eloorsfmo.apps.googleusercontent.com",
        responseType: 'token',
        onSuccess: async (tokenResponse) => {
            const accessToken = tokenResponse?.access_token;
            if (accessToken) {
                fetchData(accessToken)
            }
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const fetchData = async (accessToken) => {
        try {
            const metrics = [{ name: 'activeUsers' }];
            const dimensions = [{ name: 'country' }];

            const requestBody = {
                dateRanges: [{ startDate, endDate }],
                metrics,
                dimensions,
            };

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            };
            console.log("headers", headers)
            const apiResponse = await axios.post(
                `https://analyticsdata.googleapis.com/v1beta/properties/415896003:runReport`,
                requestBody,
                { headers }
            );

            const responseData = apiResponse.data;
            console.log("responseData", responseData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (googleLogin.tokenResponse?.access_token) {
            fetchData(googleLogin.tokenResponse.access_token);
        }
    }, [googleLogin.tokenResponse]);

    return (
        <div className="App">
            <h1>Google Analytics Report</h1>
            <button onClick={googleLogin}>Check Analytics</button>
        </div>
    );
};

export default GoogleAnalyticsApp;