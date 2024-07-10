import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/auth";
import userReducer from "./slices/userSlice";
import staffReducer from "./slices/staffSlice";
import managerReducer from "./slices/managerSlice";
import blogReducer from "./slices/blogSlice";
import shipperSlice from "./slices/shipperSlice";
import valuationSlice from './slices/valuationSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        staff: staffReducer,
        manager: managerReducer,
        shipper: shipperSlice,
        blog: blogReducer,
        valuation: valuationSlice
    },
});

export default store;
