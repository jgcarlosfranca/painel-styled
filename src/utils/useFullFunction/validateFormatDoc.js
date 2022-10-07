function validateFormatFile(file, tipo) {
    let extension, ext, valid;
    extension = ['.png', '.jpg'];

    ext = file.substring(file.lastIndexOf(".")).toLowerCase();
    valid = false;

    for (let i = 0; i <= file.length; i++) {
        if (extension[i] == ext) {
            valid = ext;
            break;
        }
    }

    if (valid) {
        return ext;
    }

    return ext;
}

export default validateFormatFile;