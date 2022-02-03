import React from 'react';
import './Suggest.css';
const Suggest = () => {
        return (
            <div className="main">
                <h1 style={{color:"white"}}>We love to hear new ideas!</h1>
                <div className="form-1">
                    <form className="form-2">
                        <input type="text" placeholder="Your name"></input>
                        <input type="email" placeholder="Your Email"></input><br /><hr />
                        <input type="text" placeholder="Your brilliant idea"></input>
                        <select  placeholder="Your brilliant idea">
                            <option selected disabled>Select subject</option>
                            <option value="1">This website</option>
                            <option value="2">Your NFT collection</option>
                        </select>
                        <br />
                        <textarea type="text" placeholder="Description" maxlength="999"></textarea><br />
                        <input type="submit" value="Send"></input>
                    </form>

                </div>
            </div>
        );
}

export default Suggest;