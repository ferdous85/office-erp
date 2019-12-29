import React, {  } from "react";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';

//import DatePicker from './DatePicker'
// import { DatePicker } from "@material-ui/pickers";

const gender = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Others',
      label: 'Others',
    },
     ];

     const bloodgroup = [
        {
          value: 'A+',
          label: 'A+',
        },
        {
            value: 'A-',
            label: 'A-',
          },
        {
          value: 'B+',
          label: 'B+',
        },
        {
          value: 'B-',
          label: 'B-',
        },
        {
            value: 'AB+',
            label: 'AB+',
          },
          {
            value: 'AB-',
            label: 'AB-',
          },
          {
            value: 'O+',
            label: 'O+',
          },
          {
            value: 'O-',
            label: 'O-',
          },
         ];

         const maritalstatus = [
            {
              value: 'Married',
              label: 'Married',
            },
            {
                value: 'Unmarried',
                label: 'Unmarried',
              },
            {
              value: 'Others',
              label: 'Others',
            },
          
             ];

             const country = [
                {
                  value: 'Bangladesh',
                  label: 'Bangladesh',
                },
                {
                    value: 'India',
                    label: 'India',
                  },
                {
                  value: 'Pakistan',
                  label: 'Pakistan',
                },
              
                 ];

     

     



const useStyles = makeStyles(theme => ({
                        root: {
                            '& > * .MuiTextField-root': {
                            margin: theme.spacing.unit*1,
                            width: 150,
                            },

                        },
                        }));

        function EmployeeReg() {
                        const classes = useStyles();
                        const [currency, setCurrency] = React.useState('male');
                        const handleChange = event => {
                            setCurrency(event.target.value);
                          };
                        

        return (
            <React.Fragment>
                <Button variant="contained" color="primary">
                        Employee List
                        </Button>
            <Container>
                <form className={classes.root} noValidate autoComplete="off">
                    <h1>Employee Registration</h1>
                    <br />
                 <TextField id="outlined-size-small" label="First Name" variant="outlined" />
                <TextField id="outlined-size-small" label="Middle Name" variant="outlined" />
                <TextField id="outlined-size-small" label="Last Name" variant="outlined" />
                <br/>
                 <TextField id="outlined-size-small" label="Father's Name" variant="outlined" />
                <TextField id="outlined-size-small" label="Mother's Name" variant="outlined" />
                
                <TextField
                    id="standard-select-currency"
                    select
                    label="Gender"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please Select"
                    >
                    {gender.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField
                    id="standard-select-currency"
                    select
                    label="BloodGroup"
                    value={bloodgroup}
                    onChange={handleChange}
                    helperText="Please Select"
                    >
                    {bloodgroup.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField
                    id="standard-select-currency"
                    select
                    label="Marital Status"
                    value={maritalstatus}
                    onChange={handleChange}
                    helperText="Please Select"
                    >
                    {maritalstatus.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <br />
                    <TextField id="outlined-size-small" label="National ID" variant="outlined" />
                    <TextField
                    id="standard-select-currency"
                    select
                    label="Country"
                    value={country}
                    onChange={handleChange}
                    helperText="Please Select"
                    >
                    {country.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField id="outlined-size-small" label="Date Of Birth" variant="outlined" />
                    <TextField id="outlined-size-small" label="Joining Date" variant="outlined" />
                    <br />
                    <TextField id="outlined-size-small" label="Contact number" variant="outlined" />
                    <TextField id="outlined-size-small" label="Email ID" variant="outlined" />
                            <br/>
                            <h5>Last Education</h5>
                    <TextField id="outlined-size-small" label="Degree" variant="outlined" />
                    <TextField id="outlined-size-small" label="Institute Name" variant="outlined" />
                    <TextField id="outlined-size-small" label="Result" variant="outlined" />
                    <TextField id="outlined-size-small" label="Major" variant="outlined" />
                    <br/>
                      <h5>Present Address</h5>
                      <TextField id="outlined-size-small" label="Street Name" variant="outlined" />
                    <TextField id="outlined-size-small" label="City Name-1" variant="outlined" />
                    <TextField id="outlined-size-small" label="City Name-2" variant="outlined" />
                    <TextField id="outlined-size-small" label="Country" variant="outlined" />
                    <br/>
                      <h5>Permanent Address</h5>
                      <TextField id="outlined-size-small" label="Street Name" variant="outlined" />
                    <TextField id="outlined-size-small" label="Street Name-2" variant="outlined" />
                    <TextField id="outlined-size-small" label="City" variant="outlined" />
                    <TextField id="outlined-size-small" label="Country" variant="outlined" />
                    <br/>
                      <h5>Job Experience</h5>
                      <TextField id="outlined-size-small" label="Company Name" variant="outlined" />
                    <TextField id="outlined-size-small" label="Designation" variant="outlined" />
                    <TextField id="outlined-size-small" label="Working Years" variant="outlined" />
                     {/* <DatePicker /> */}
                     <br />
                     <Button variant="contained" color="primary">
                        Submit
                        </Button>
                                        
                </form>
                </Container>
                </React.Fragment>
                    );
                    }

export default EmployeeReg