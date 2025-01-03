import React from 'react';

function MangerElement({ children, usertypes , currentUserType }) {

        if(currentUserType === usertypes.MANAGER_USER  || currentUserType === usertypes.ADMIN_USER){
            return <>{children} </>
        }
        else{
            return (

                "You do not have access"
            )
            
        }

 
}

export default MangerElement;
