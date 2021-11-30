export default function validateInfo(values) {
    let errors = {};

    if(!values.username.trim()) {
        errors.username = "Username wajib diisi";
    }

    if(!values.niu) {
        errors.niu = "NIU wajib diisi";
    } else if (values.niu.length !== 6) {
        errors.niu = "NIU harus 6 karakter";
    }

    return errors;
}