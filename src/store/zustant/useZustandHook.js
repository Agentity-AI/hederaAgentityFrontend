import { create } from "zustand";
import api from "../axios/axiosInitaition";
import toast from "react-hot-toast";

export const authentication = create((set) => ({
  dashBoard: null,
  loading: false,
  error: null,
  agents: [],
  agentDetails: null,
  smartContracts: [],
  user: null,

  registerUser: async (payload) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post("/auth/register", payload);

      if (!res || res.status < 200 || res.status >= 300) {
        alert("Registration failed, please try again");
        set({ loading: false });
        return;
      }

      const { jwt, dashboard, email, name } = res.data;

      set({
        dashBoard: dashboard,
        user: { email, name },
        loading: false,
      });
      toast.success("Registration successful!", { id: "register" });
      // TODO: optionally persist jwt (localStorage / cookie)
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.message ?? "Failed to register user",
      });
      toast.error("Registration failed, please try again", { id: "register" });
    }
  },

  loginUser: async (payload) => {
    try {
      set({ loading: true, error: null });

      const res = await api.post("/auth/login", payload);

      console.log("Login response:", res.status, res.data);

      if (!res || res.status < 200 || res.status >= 300) {
        alert("Login failed, please try again");
        set({ loading: false });
        return;
      }

      const { jwt, dashboard, email, name } = res.data;

      set({
        dashBoard: dashboard,
        user: { email, name },
        loading: false,
      });
      toast.success("Login successful!", { id: "login" });

  
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.message ?? "Failed to login user",
      });
      toast.error("Login failed, please try again", { id: "login" });
    }
  },

  getDashboard: async () => {
    try {
      set({ loading: true, error: null });

      const res = await api.get("/dashboard/overview");

      set({ dashBoard: res.data, loading: false });

      toast.success("Dashboard data loaded!", { id: "load-dashboard" });

    } catch (err) {
      set({
        loading: false,
        error:
          err?.response?.data?.message ?? "Failed to get dashboard data",
      });
    
    }
  },

  getUserAgents: async () => {
    try {
      set({ loading: true, error: null });

      const res = await api.get("/agents/my");

      set({ agents: res.data.agents, loading: false });
  toast.success("Agents loaded!", { id: "load-agents" });
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.message ?? "Failed to get user agents",
      });
      toast.error("Failed to load agents", { id: "load-agents" });
    }
  },
  registerAgent: async (payload) => {
    try {
      set({ loading: true, error: null });
      const res = await api.post("/agents/register", payload);

      if (!res || res.status < 200 || res.status >= 300) {
        alert("Agent registration failed, please try again");
        set({ loading: false });
        return;
      }
     toast.success("Agent registered!", { id: "register-agent" });
      set({ loading: false });
    } catch (err) {
      set({
        loading: false,
        error: err?.response?.data?.message ?? "Failed to register agent",
      });
      toast.error("Failed to register agent", { id: "register-agent" });
    }}
}));
