let CryptoJS = require("crypto-js");

/**
 * AES JSON formatter for CryptoJS
 * @version 1.0.0
 */

let CryptoJSString = {
    'encrypt': function (value) {
        let src = JSON.stringify({"api-token": value});
        const encodedWord = CryptoJS.enc.Utf8.parse(src);
        return CryptoJS.enc.Base64.stringify(encodedWord);
    },
}


module.exports.templateTags = [{
    name: 'CryptoJS',
    displayName: 'CryptoJS',
    description: 'Encrypt value using CryptoJS',
    args: [
        {
            displayName: 'Text to encrypt',
            type: 'string',
            placeholder: '-- enter your text --'
        }
    ],
    run (_, key, value) {
        key = key || '';
        value = value || '';
        return CryptoJSString.encrypt(value, key);
    }
}];
