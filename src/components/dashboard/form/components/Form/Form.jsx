import React, { useEffect } from 'react';
import { Formik } from 'formik';

function Form({ initialValues, onSubmit, validationSchema, children}) {
    useEffect(() => {
        console.log('INITIAL', initialValues);
    },[]);

    return (
        <Formik 
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              enableReinitialize
            >
                {() => (
                    <>
                        { children }
                    </>
                )}
        </Formik>
    );
}

export default Form;