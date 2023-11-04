import React, { useState } from 'react';
import axios from 'axios';
import "./sigin.css"
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [DOB, setDOB] = useState("");
    const [gst, setGst] = useState("");
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
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 mx-auto form1">
                            <div className='row justify-content-center'>
                                <form onSubmit={handleSubmit}>
                                    <div><h1>Sign Up</h1></div>

                                    <label>
                                        Name:
                                        <input
                                            type="text"
                                            placeholder='Name'
                                            name="name"
                                            value={name} // Use 'name' state
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Mobile Number:
                                        <input
                                            type="text"
                                            placeholder=' +91'
                                            name="mobileNo"
                                            value={mobileNo} // Use 'mobileNo' state
                                            onChange={(e) => setMobileNo(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Date of Birth:
                                        <input
                                            type="date"
                                            name="DOB"
                                            value={DOB} // Use 'DOB' state
                                            onChange={(e) => setDOB(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Document Type:
                                        <select name="documentType">
                                            <option value="aadhaarImage">Aadhar Card</option>
                                            <option value="pan">PAN Card</option>
                                            <option value="voter">Voter Card</option>
                                            <option value="driving">Driving License</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </label>

                                    <label>
                                        Upload Document:
                                        <input type="file" name="aadhaarImage" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, "aadhaarImage")} />
                                    </label>

                                    <label>
                                        GST:
                                        <input
                                            type="tel"
                                            name="gst"
                                            placeholder='enter gst No.'
                                            value={gst} // Use 'gst' state
                                            onChange={(e) => setGst(e.target.value)} // Corrected the typo in this line
                                        />
                                    </label>

                                    <div className="text-center">
                                        <button type="submit" className="btn">Sign Up</button>
                                    </div>
                                    <div className='text-h2'>
                                        already a user <a href="/login"> <strong> Login</strong> </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sign;