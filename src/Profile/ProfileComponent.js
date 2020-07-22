import React from 'react';
import Proptypes from 'prop-types';



 function ProfileComponent(props){
    
   

        return (
            <div>
                <p style={{fontSize: 18, fontStyle:'italic'}}>FullName:{props.fullName}</p>
                <p style={{fontSize: 18, fontStyle:'italic'}}>Bio:{props.Bio}</p>
              <p style={{fontSize: 18, fontStyle:'italic'}}>  Profession:{props.profession}</p>
               

              <button
        className="btn btn-primary"
        onClick={() => props.clickHandler(props.fullName)}
      >
        Alert name of profile
      </button>       
              
                {props.children}

            </div>
        );
    }

ProfileComponent.defaultProps={
    fullName:"Hiba",
    Bio:"1992",
    profession:"Engineer"
}
ProfileComponent.propTypes = {
    fullName: Proptypes.string.isRequired,
    Bio: Proptypes.string.isRequired,
    profession: Proptypes.string.isRequired

}
export default ProfileComponent;