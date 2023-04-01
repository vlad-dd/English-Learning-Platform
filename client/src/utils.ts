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

export { 
  uid,
  focusNodeAfterMounting,
  generateNicknameAvatars
};