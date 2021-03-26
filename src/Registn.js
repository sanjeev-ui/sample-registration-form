import React from 'react';
import './Registn.css';

const Registn = () => {
    return (
            <form className="signup-form" action="/register" method="post">
                <div className="form-header">
                    <h1>Create Account</h1>
                </div>
                <div className="form-body">
                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label htmlFor="firstname" className="label-title">First name *</label>
                            <input type="text" id="firstname" className="form-input" placeholder="Enter your first name" required="required" />
                        </div>
                        <div className="form-group right">
                            <label htmlFor="lastname" className="label-title">Last name *</label>
                            <input type="text" id="lastname" className="form-input" placeholder="Enter your last name" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="label-title">Email*</label>
                        <input type="email" id="email" className="form-input" placeholder="enter your email" required="required" />
                    </div>
                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label htmlFor="password" className="label-title">Password *</label>
                            <input type="password" id="password" className="form-input" placeholder="enter your password" required="required" />
                        </div>
                        <div className="form-group right">
                            <label htmlFor="confirm-password" className="label-title">Confirm Password *</label>
                            <input type="password" className="form-input" id="confirm-password" placeholder="enter your password again" required="required" />
                        </div>
                    </div>

                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label className="label-title">Gender:</label>
                            <div className="input-group">
                                <label htmlFor="male"> <input type="radio" name="gender" value="male" id="male" /> Male</label>
                                <label htmlFor="female"> <input type="radio" name="gender" value="female" id="female" /> Female</label>
                            </div>
                        </div>
                        <div className="form-group right">
                            <label className="label-title">Hobbies</label>
                            <div>
                                <label> <input type="checkbox" value="Web" />Music</label>
                                <label> <input type="checkbox" value="iOS" />Sports</label>
                                <label> <input type="checkbox" value="Andriod" />Travel</label>
                                <label> <input type="checkbox" value="Game" />Movies</label>
                            </div>
                        </div>
                    </div>

                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label className="label-title">Source of Income</label>
                            <select className="form-input" id="level">
                                <option value="B">Employed</option>
                                <option value="I">Self-employed</option>
                                <option value="A">Unemployed</option>
                            </select>
                        </div>
                    </div>

                    <div className="horizontal-group">
                        <div className="form-group left">
                            <label htmlFor="choose-file" className="label-title">Upload Profile Picture</label>
                            <input type="file" id="choose-file" size="80" />
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="choose-file" className="label-title">Bio</label>
                        <textarea className="form-input"></textarea>
                    </div>









                </div>
                <div className="form-footer">
                    <span>* required</span>
                    <button type="submit" className="btn">Create</button>
                </div>
            </form>
    )
}

export default Registn
