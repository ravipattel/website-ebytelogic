import { supabase } from "@/supabase/supabaseClient";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  message?: string;
  user?: any;
}

export const loginUser = async ({ email, password }: LoginCredentials): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { success: false, message: error.message };
    }

    if (data.session) {
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("session_expires_at", expiresAt.toString());

      return {
        success: true,
        message: "Login successful",
        user: data.user,
      };
    }

    return { success: false, message: "Login failed" };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An error occurred during login",
    };
  }
};

// Check if session is still valid (within 24 hours) - Client side
export const checkSessionValidity = (): boolean => {
  const expiresAt = localStorage.getItem("session_expires_at");
  if (!expiresAt) return false;

  if (Date.now() >= Number(expiresAt)) {
    logoutUser();
    return false;
  }

  return true;
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) return null;
    if (!checkSessionValidity()) return null;

    return user;
  } catch {
    return null;
  }
};

// Logout function
export const logoutUser = async (): Promise<void> => {
  try {
    await supabase.auth.signOut();
  } finally {
    localStorage.removeItem("session_expires_at");
  }
};

// Check authentication status
export const isAuthenticated = async (): Promise<boolean> => {
  const user = await getCurrentUser();
  return Boolean(user);
};


// Get remaining session time
export const getRemainingSessionTime = (): {
  hours: number;
  minutes: number;
  expired: boolean;
} => {
  const expiresAt = localStorage.getItem("session_expires_at");
  if (!expiresAt) return { hours: 0, minutes: 0, expired: true };

  const diff = Number(expiresAt) - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, expired: true };

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes, expired: false };
};

