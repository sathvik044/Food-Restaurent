export const getAuthHeader = (): Record<string, string> => {
  try {
    const userStr = localStorage.getItem("user");
    if (!userStr || userStr === "undefined" || userStr === "null") return {};

    const user = JSON.parse(userStr);
    if (!user || !user.token) return {};

    return { "Authorization": `Bearer ${user.token}` };
  } catch (error) {
    console.error("Auth header error:", error);
    return {};
  }
};
