import axios from "axios";
import getLandlordApiUrl from "../Config";

export const searchForProperties = async (search) => {
    const landlordApiUrl  = getLandlordApiUrl();
    const {data: properties} = await axios.get(`${landlordApiUrl}/properties?search=${search}`);
    return properties;
}

export const getProperty = async (pin) => {
    const landlordApiUrl = getLandlordApiUrl();
    const { data: property } = await axios.get(`${landlordApiUrl}/properties/${pin}`);
    return property
}

export const getPropertyImage = async (pin) => {
    const landlordApiUrl = getLandlordApiUrl();
    const response_url = await axios.get(`${landlordApiUrl}/properties/${pin}/image`);
    return response_url?.data?.image_url
}
