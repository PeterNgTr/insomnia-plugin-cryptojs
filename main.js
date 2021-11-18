let CryptoJS = require("crypto-js");

encrypt = function (value) {
    let src = JSON.stringify({'api-token': value});
    const encodedWord = CryptoJS.enc.Utf8.parse(src);
    return CryptoJS.enc.Base64.stringify(encodedWord);
}

module.exports.templateTags = [{
    name: 'TamaraCryptoJS',
    displayName: 'TamaraCryptoJS',
    description: 'Encrypt value using CryptoJS',
    args: [
        {
            displayName: 'Value',
            type: 'string',
            placeholder: '-- enter your text --'
        }
    ],
    run (context, value) {
        return encrypt(value);
    }
}];
