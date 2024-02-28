'use client';
import Image from "next/image";
import { useState } from "react";   

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and confirm password do not match.");
            return;
        }
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };
    
        try {
            const response = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            // Check if the request was successful
            if (response.ok) {
                // Reset form fields after successful submission
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                // Handle any success feedback to the user
                alert('Registration successful!');
            } else {
                // Handle errors if the request was not successful
                alert('Registration failed.');
            }
        } catch (error) {
            // Handle network errors or other unexpected errors
            console.error('Error:', error);
        }
    };
    return(
        <>
            <section className="mx-auto w-4/5">
                <h1 className="text-center text-3xl font-bold text-gray-200 drop-shadow leading-relaxed">Register</h1>
                <form className="flex flex-col gap-3 my-3" onSubmit={handleSubmit}>
                    <input type="text" placeholder="FIRST NAME" required value={firstName} onChange={handleFirstNameChange} />
                    <input type="text" placeholder="LAST NAME" required value={lastName} onChange={handleLastNameChange} />
                    <input type="email" placeholder="EMAIL" required value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder="PASSWORD" required value={password} onChange={handlePasswordChange} />
                    <input type="password" placeholder="CONFIRM PASSWORD" required value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <button type="submit" className="w-1/3 mx-auto hover:text-white hover:bg-colorSNav bg-gray-200 text-colorSNav border-colorSNav">
                        REGISTER
                    </button>
                    <button className="flex items-center justify-center w-1/3 mx-auto hover:text-white hover:bg-colorSNav bg-gray-200 text-colorSNav border-colorSNav">
                        <Image
                            src="/google.png"
                            alt="Google Logo"
                            width={35}
                            height={35}
                        />
                        LOGIN WITH GOOGLE
                    </button>
                </form>
                
            </section>
        </>
    );
}


   