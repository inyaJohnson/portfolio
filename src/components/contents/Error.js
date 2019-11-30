import React from 'react';
import Layout from '../Layout';
const Error = ({location}) => {
    return(
        <Layout>
            <div className='error-page'>
                <h2 style={{color:'red', display:'flex', flexDirection:'column', alignItems:'center'}}>Resource not found @ '{location.pathname}'</h2>
            </div>
        </Layout>
    )
}
export default Error;