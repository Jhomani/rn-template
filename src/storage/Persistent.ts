import AsyncStorage from '@react-native-async-storage/async-storage';

class Persistent {
  nameStorage: string;

  constructor(name: string) {
    this.nameStorage = name;
  }

  async remove() {
    try {
      await AsyncStorage.removeItem(this.nameStorage);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async delete(key: number | string) {
    let result = false;

    try {
      const datas: any = await this.get();

      if (typeof key == 'number') datas.splice(key, 1);
      else delete datas[key];

      await this.set(datas, true);
      result = true;
    } catch (error) {
      console.log(error);
    }

    return result;
  }

  async get() {
    let result: Object | unknown[] = {};

    try {
      const values = await AsyncStorage.getItem(this.nameStorage);
      result = values ? JSON.parse(values) : {};
    } catch (e) {
      console.log(e);
    }

    return result;
  }

  async set(values: Object, reset = true) {
    try {
      if (reset) {
        const oldData = await this.get();

        if (oldData instanceof Array)
          await AsyncStorage.setItem(
            this.nameStorage,
            JSON.stringify([...oldData, values])
          );
        else
          await AsyncStorage.setItem(
            this.nameStorage,
            JSON.stringify({...oldData, values})
          );
      } else
        await AsyncStorage.setItem(this.nameStorage, JSON.stringify(values));
    } catch (e) {
      console.log(e);
    }
  }

  async update(key: number | string, value: unknown) {
    let result = false;

    try {
      const values: any = await this.get();

      values[key] = value;

      await this.set(values, true);

      result = true;
    } catch (error) {
      console.log(error);
    }

    return result;
  }
}

export const setting = new Persistent('setting');
export const userData = new Persistent('userData');
