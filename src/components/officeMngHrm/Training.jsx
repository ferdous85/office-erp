import React from 'react';
import { } from 'react-router';
import {  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddTraining from './AddTraining'
import DeptDesignation from './DeptDesignation'






                // const LinkBehavior = React.forwardRef((props, ref) => (
                // <RouterLink ref={ref} to="./components/officeMngHrm/AddTraining" {...props} />
                // ));

                function Training() {

                return (
                    
                    <div >
                    
                    <Button variant="contained" color="primary" className='mr-4' component={AddTraining} path="/training" >
                        Training Attendence
                    </Button>
                    <Button variant="contained" color="primary" component={DeptDesignation} path="/training" >
                        Add Training
                    </Button>
                    
                    </div>
                    
                );
                }

                export default Training
