import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./sigin.module.css";

const Sign = () => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [DOB, setDOB] = useState("");
    const [GST_Number, setGST_Number] = useState("");
    const [aadhaarImage, setAadhaarImage] = useState(null); // Initialize with null


    const navigate = useNavigate()

    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        switch (type) {
            case "aadhaarImage":
                setAadhaarImage(file);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("aadhaarImage", aadhaarImage);
        formData.append("name", name);
        formData.append("DOB", DOB);
        formData.append("mobileNo", mobileNo);
        formData.append("GST_Number", GST_Number)

        try {
            const response = await axios.post('http://localhost:7000/register', formData);
            console.log('Registration successful', response.data);
            navigate("/login")
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <>
            <section>
                <div className="container">
                            <div >
                               
<form onSubmit={handleSubmit} className={styles.container}>
    <div className={styles.card}>
        <div className={styles.card_title}>
            <h1>Sign Up</h1>
        </div>

        <label className={styles.form}>
            Name:
            <input
                type="text"
                placeholder='Name'
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </label>

        <label className={styles.form}>
            Mobile Number:
            <input
                type="text"
                placeholder='+91'
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
            />
        </label>

        <label className={styles.form}>
            Date of Birth:
            <input
                type="date"
                name="DOB"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                required
            />
        </label>

        <label className={styles.form}>
            Document Type:
            <select name="documentType">
                <option value="aadhaarImage">Aadhar Card</option>
                <option value="pan">PAN Card</option>
                <option value="voter">Voter Card</option>
                <option value="driving">Driving License</option>
                <option value="other">Other</option>
            </select>
        </label>

        <label className={styles.form}>
            Document No:
            <input
                type="tel"
                name="text"
                placeholder='document number'
                value={GST_Number}
                onChange={(e) => setGST_Number(e.target.value)}
            />
        </label>

        <label className={styles.form}>
            Upload Document:
            <input type="file" name="aadhaarImage" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, "aadhaarImage")} />
        </label>

      

        <div className={`text-center ${styles.form}`}>
            <button type="submit" className={styles.btn}>Sign Up</button>
        </div>

        <div className={styles.bottom}>
            already a user <a href="/login"> <strong> Login</strong> </a>
        </div>
    </div>
</form>
                            </div>
                        
                    </div>
                
            </section>
        </>
    );
};

export default Sign;