import * as SecureStore from 'expo-secure-store';

type SecureStorageKeys = "access_token" | "refresh_token"

export class SecureStorage {

    private static instance: SecureStorage;



    private constructor() { }

    public static getInst(): SecureStorage {
        if (!SecureStorage.instance) {
            SecureStorage.instance = new SecureStorage();
        }

        return SecureStorage.instance;
    }




    async save(key: SecureStorageKeys, value: string):Promise<boolean> {
        try{
            await SecureStore.setItemAsync(key, value);
            return true;
        }catch (e){
            return false
        }
    }

    async getValueFor(key: SecureStorageKeys): Promise<string | null> {
        let result = await SecureStore.getItemAsync(key);
        return result
    }


}