import React, { useState } from 'react';
import './addvoucher.css';
import form1 from './../assets/images/images.png';
import {ToastContainer, toast} from 'react-toastify';

const Addvoucher = () => {
    const [formData, setFormData] = useState({
        Title: '',
        Provider: 'Airtel',
        Amount: '',
        Description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            documentFile: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the data to send to the server
        const planData = {
            title: formData.Title,
            provider: formData.Provider,
            amount: formData.Amount,
            description: formData.Description,
        };

        // Make an API call to send the plan data to the server
        fetch('http://localhost:7000/plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ2MTYwZWM0MGEyMTU5OWYyYmI3NWYiLCJpYXQiOjE2OTkwOTU3NTksImV4cCI6MTcwMjExOTc1OX0.SmkEu9cZatrSr67mEebI5KGWWmmBGNpKCtsDyIhJ0oA'
            },
            body: JSON.stringify(planData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log( "success", response)
                
                    // Plan added successfully, you can handle the response here
                } else {
                    // Handle errors or display an error message
                }
            })
            .catch((error) => {
                // Handle network errors
            });
    };



    return (
        <>
      
            <section>
                <div className="container">
                    <div className="row">
                        <div className=" col-xl-6 col-lg-6 col-sm-12 col-md-12 mx-auto form1">
                            <div className='row justify-content-center'>
                       

                                <form onSubmit={handleSubmit}>
                                    <div> <h1> Add Voucher</h1> </div>

                                    <label>
                                        Title:
                                        <input
                                            type="text"
                                            placeholder='Name'
                                            name="Title"
                                            value={formData.Title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        Provider:
                                        <select name="Provider" value={formData.Provider} onChange={handleInputChange}>
                                        <option value="Vodafone">Vodafone-Idea</option>
                                                <option value="Airtel">Airtel</option>
                                                <option value="Bsnl">Bsnl</option>
                                                <option value="Jio">Jio</option>
                                                <option value="DishTv">DishTv</option>
                                                <option value="TataSky">TataSky</option>
                                                <option value="VideconApp">VideconApp</option>
                                                <option value="SunDirect">SunDirect</option>
                                                <option value="JioPosLite">JioPosLite</option>
                                                <option value="DishTv">DishTv</option>
                                                <option value="D2H">D2H Pay</option>
                                        </select>
                                    </label>

                                    <label>
                                        Amount:
                                        <input
                                            type="text"
                                            name="Amount"
                                            value={formData.Amount}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>

                                    <label>
                                        Description:
                                        <input
                                            type="text"
                                            name="Description"
                                            value={formData.Description}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary">Submit</button>
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

export default Addvoucher;
