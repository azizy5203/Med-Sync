import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/vendors/axios";
import router from "@/router";
import { toast } from "react-toastify";

const showToast = (msg, type = "success") => {
  toast(msg, {
    draggable: true,
    type: type,
    theme: localStorage.getItem("vite-ui-theme"),
    autoClose: 1300,
  });
};

export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    const { data } = await axios.post("/auth/login", values);
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("USER")),
    token: localStorage.getItem("TOKEN"),
    isLoading: false,
  },
  reducers: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    setStoreState: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("USER");
      localStorage.removeItem("TOKEN");
      router.navigate("/login");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("USER", JSON.stringify(action.payload.user));
      localStorage.setItem("TOKEN", action.payload.token);
      state.isLoading = false;
      showToast("logged in!");
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      console.error(action.error);
      showToast("Invalid Credentials", "error");
    });
  },
});

export const register = (values, isAdmin) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/register", {
        ...values,
        IsAdmin: isAdmin,
      });
      dispatch(setStoreState(data));
      showToast("registration successful!");
      router.navigate("/login");
    } catch (error) {
      console.error("Store registration Error", error);
      showToast("Invalid Data", "error");
    }
  };
};

export const { getUser, getToken, logout, setStoreState, setLoading } =
  authSlice.actions;
export default authSlice.reducer;
