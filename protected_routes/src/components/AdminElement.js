import React from 'react';

function AdminElement({ children, usertypes , currentUserType }) {

        if(currentUserType === usertypes.ADMIN_USER  ){
            return <>{children} </>
        }
        else{
            return (

                "You do not have access"
            )
            
        }

 
}

export default AdminElement;
