import React from 'react';

const skills = (props) => {
    return (
        <div>
            <h1>  my skills 
                <ul >
                    <li>{props.code}</li>
                    <li>Javascript</li>
                    <li>Github</li>
                    <li>Facebook</li>
                </ul>
            
            
            </h1>
        </div>
    );
};

export default skills;