const aes256 = require('aes256');

const key = 'enc-key';
const key2 = 'enc-key-2';

const plaintext = 'ENCRYPT THIS MESSAGE';

const encrypted = aes256.encrypt(key, plaintext);
console.log('Encrypted:', encrypted);

const decrypted = aes256.decrypt(key, encrypted);
console.log('Decrypted:', decrypted);

const failed = aes256.decrypt(key2, encrypted);
console.log('failed decrypt!:', failed)
