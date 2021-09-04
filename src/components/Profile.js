// import React , {Component}  from 'react';


// class Profile extends React.Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }


// export default Profile;
import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <h1> my name is {props.name} </h1>
             <h3> i am a {props.title}</h3>
             <p>i love {props.code}</p>
        </div>
    );
};

export default Profile;