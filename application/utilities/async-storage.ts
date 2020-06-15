import AsyncStorage from '@react-native-community/async-storage';

export const get = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch {
    throw new Error(`There was an error reading the key: ${key}`);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const save = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    throw new Error(`There was an error saving the key: ${key} and value: ${String(value)}`);
  }
};

export const saveOnce = async <T>(key: string, value: string): Promise<T | null> => {
  try {
    const resValue = await get<T>(key);
    if (resValue === null || resValue === undefined) {
      await save(key, value);
    }
    return resValue;
  } catch {
    throw new Error(`There was an error in the operation`);
  }
};

export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    throw new Error(`There was an error removing the key: ${key}`);
  }
};

export const update = async (key: string, value: string): Promise<void> => {
  try {
    await removeItem(key);
    await save(key, value);
  } catch {
    throw new Error(`There was an error updating the key: ${key} and value: ${value}`);
  }
};

export const reset = async (keys: Array<string>): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch {
    throw new Error(`There was an error reseting the keys: ${keys.join('-')}`);
  }
};

export const clear = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch {
    throw new Error(`There was an error clearing the storage system`);
  }
};
