import React from 'react';

function UserElement({ children, usertypes , currentUserType }) {

        if(currentUserType === usertypes.NORMAL_USER ||currentUserType === usertypes.MANAGER_USER || currentUserType === usertypes.ADMIN_USER ){
            return <>{children} </>
        }
        else{
            return (

                "You need to login"
            )
            
        }

 
}

export default UserElement;
