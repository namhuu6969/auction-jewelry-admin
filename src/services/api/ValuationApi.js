import api from "../../config/axios";

const API_BASE_URL = "http://apijewelryauction.techx.id.vn:8081";

const getAllValuations = async () => {
    try {
        const response = await api.get(`${API_BASE_URL}/api/v1/valuating`);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw error;
    }
};
const getMyValuations = async () => {
    try {
        const response = await api.get(`valuating/me`);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw error;
    }
};

const editValuating = async (
    id,
    address,
    staffId,
    valuation_value,
    notes,
    status,
    desiredPrice,
    paymentMethod,
    valuatingMethod
) => {
    try {
        const response = await api.put(`${API_BASE_URL}/api/v1/valuating/${id}`, {
            address,
            staffId,
            valuation_value,
            notes,
            status,
            desiredPrice,
            paymentMethod,
            valuatingMethod,
        });
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw error;
    }
};
const searchValuationById = async (id) => {
    try {
        const response = await api.get(`${API_BASE_URL}/api/v1/valuating/${id}`);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw error;
    }
};
const deleteValuation = async (id) => {
    try {
        const response = await api.delete(`${API_BASE_URL}/api/v1/valuating/${id}`);
        return response.data;
    } catch (error) {
        // Handle error
        console.error(error);
        throw error;
    }
};
export { getAllValuations, editValuating, searchValuationById, deleteValuation, getMyValuations };
