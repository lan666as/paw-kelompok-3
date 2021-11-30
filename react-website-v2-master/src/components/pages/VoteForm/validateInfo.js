export default function validateInfo(values) {
  let errors = {};

  if(!values.nama.trim()) {
      errors.nama = "Nama wajib diisi";
  }

  if(!values.nim) {
      errors.nim = "NIM wajib diisi";
  } else if (values.nim.length !== 18) {
      errors.nim = "NIM harus 18 karakter";
  }

  return errors;
}