import React, { useState } from 'react'

function LoginRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [message, setMessage] = useState('');
    const [_message, _setMessage] = useState('');
    const [userRegister, setUserRegister] = useState({
        name: '',
        email: '',
        password: ''
    });


    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/Users');
        const data = await response.json();
        const user = await data.find(u => u.email === String(email) && u.password === String(password));

        if (user) {
            console.log("alinan kullanıcı       " + user.id)
            const handleLogin = (user) => {
                console.log("kontrol geçildi")
                setLoggedInUser(user);
                console.log("giriş yapan kullanıcı" + loggedInUser);
                setMessage("Login successfully!")
            };
            handleLogin();
        }
        else {
            setLoggedInUser(null);
            setMessage("Sign up to start shopping!");
        }

    }

    
    const handleInputChange = (e) => {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
    };

    const handleRegister = () => {

        fetch('http://localhost:3000/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegister),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to register');
                }
                return response.json();
            })
            .then(data => {
                console.log('Registration successful:', data);
                _setMessage("User added successfully!")
            })
            .catch(error => {
                console.error('Error registering:', error);
            });

    }


    return (
        <div className="page-content mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">

                        <div className="login-form">
                            <h4 className="login-title">Login</h4>
                            <div className="row">
                                <div className="col-md-12 col-12 mb-20">
                                    <label>Email Address*</label>
                                    <input className="mb-0" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-12 mb-20">
                                    <label>Password</label>
                                    <input className="mb-0" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="col-md-8">
                                    <p className='text-danger'>{message}</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                        <input type="checkbox" />
                                        <label htmlFor="rememberMe">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button onClick={() => fetchUsers()} className="register-button mt-3">Login</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6">

                        <div className="login-form">
                            <h4 className="login-title">Register</h4>
                            <div className="row">
                                <div className="col-md-12 col-12 mb-20">
                                    <label>Full Name</label>
                                    <input className="mb-0" type="text" placeholder="Full Name" name="name" value={userRegister.name} onChange={handleInputChange} />
                                </div>
                                <div className="col-md-12 mb-20">
                                    <label>Email Address*</label>
                                    <input className="mb-0" type="email" name='email' placeholder="Email Address" value={userRegister.email} onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6 mb-20">
                                    <label>Password</label>
                                    <input className="mb-0" type="password" name="password" placeholder="Password" value={userRegister.password} onChange={handleInputChange}  />
                                </div>
                                <div className="col-12">
                                    <p className='text-success'>{_message}</p>
                                </div>
                                <div className="col-12">
                                    <button onClick={()=>handleRegister()} className="register-button mt-0">Register</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginRegister