import { message } from "antd";
import { get } from "lodash";

const uid = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter ++;
    }
    return result;
}

const focusNodeAfterMounting = (id: string) => document.getElementById(id)?.focus();

const generateNicknameAvatars = (name: string) => ({ children: `${name.split(' ')[0][0] + name.split(' ')[1][0]}` });

const successMessage = (text: string) => (() => message.success(text))();
const errorMessage = (text: string) => (() => message.error(text))();
const warningMessage = (text: string) => (() => message.warning(text))();

const extractByPath = (data: any, path: string) => get(data, path);

export { 
  uid,
  focusNodeAfterMounting,
  generateNicknameAvatars,
  successMessage,
  extractByPath,
  errorMessage,
  warningMessage
};