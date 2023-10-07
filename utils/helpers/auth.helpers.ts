import AsyncStorage from "@react-native-async-storage/async-storage";

export const USER_KEY = "_@USER_DATA_SECURITY";

export const getUserFromStorage = async () => {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  } catch (error) {
    console.error("Error fetching user data from AsyncStorage:", error);
    return null;
  }
};

export const removeUserFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Error removing user data from AsyncStorage:", error);
  }
};

export const saveUserToStorage = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(USER_KEY, jsonData);
  } catch (error) {
    console.error("Error saving user data to AsyncStorage:", error);
  }
};
