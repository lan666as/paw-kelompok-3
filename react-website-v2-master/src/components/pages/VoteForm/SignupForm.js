import React, {useState} from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './VoteForm.css';
import axios from 'axios'

const SignupForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    const [dropdown,setDropdown] = useState("1");
    
    
    


    

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1> Surat Suara</h1>
                <h1> Pemilihan Calon Ketua</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Nama Lengkap
                    </label>
                    <input 
                        id="nama"
                        type="text"
                        name="nama"
                        className="form-input"
                        placeholder="Masukkan nama lengkap"
                        value={values.nama}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="nim" className="form-label">
                        NIM
                    </label>
                    <input 
                        id="nim"
                        type="text"
                        name="nim"
                        className="form-input"
                        placeholder="Masukkan NIM (18 digit)"
                        value={values.nim}
                        onChange={handleChange}
                    />
                    {errors.niu && <p>{errors.niu}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="pilihan" className="form-label">
                        Pilihan
                    </label>
                    <select value={values.pilihan} name="pilihan" onChange={handleChange}>
                        <option value="1">1. Muhammad Rifat</option>
                        <option value="2">2. Denny Dewanta</option>
                        <option value="3">3. Ahmad Zidan</option>
                    </select>
                    {/* <label htmlFor="pilihan" className="form-label">
                        Pilihan (1 digit)
                    </label>
                    <input 
                        id="pilihan"
                        type="text"
                        name="pilihan"
                        className="form-input"
                        placeholder="Masukkan pilihan (1 digit)"
                        value={values.pilihan}
                        onChange={handleChange}
                    /> */}
                </div>
                <button className="form-input-btn" type="submit">
                    Kirim
                </button>
            </form>
        </div>
    )
}

export default SignupForm