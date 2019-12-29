import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

        function TabPanel(props) {
                    const { children, value, index, ...other } = props;

                    return (
                        <Typography
                        component="div"
                        role="tabpanel"
                        hidden={value !== index}
                        id={`simple-tabpanel-${index}`}
                        aria-labelledby={`simple-tab-${index}`}
                        {...other}
                        >
                        {value === index && <Box p={3}>{children}</Box>}
                        </Typography>
                    );
                    }

                    TabPanel.propTypes = {
                    children: PropTypes.node,
                    index: PropTypes.any.isRequired,
                    value: PropTypes.any.isRequired,
                    };

        function a11yProps(index) {
                    return {
                        id: `simple-tab-${index}`,
                        'aria-controls': `simple-tabpanel-${index}`,
                    };
                    }

                    const useStyles = makeStyles(theme => ({
                    root: {
                        flexGrow: 1,
                        backgroundColor: theme.palette.background.paper,
                    },
                    }));

    function TabLinks() {
                    const classes = useStyles();
                    const [value, setValue] = React.useState(0);

                    const handleChange = (event, newValue) => {
                        setValue(newValue);
                    };

                    return (
                        <div className={classes.root}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} 
                            aria-label="simple tabs example">
                            <Tab label="Director" {...a11yProps(0)} />
                            <Tab label="Team Members" {...a11yProps(1)} />
                            <Tab label="Employees" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                        <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Rashed.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Khondoker Rashed Manon</CardTitle>
                                    <CardSubtitle>Managing Director</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. </CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Parvez-Mahmud.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Parvez Mahmud</CardTitle>
                                    <CardSubtitle>Director, Finance & Marketing</CardSubtitle>
                                    <CardText>This card has supporting text below as a natural lead-in to  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Biprodas-Roy.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Biprodas Roy</CardTitle>
                                    <CardSubtitle>Director of Operations</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. </CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Milon-hossain.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Md. Istiqur Rahman</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text below as a natural  longer.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                        </CardGroup>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                        <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/swadip-singho-roy.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Swadip Singho Roy</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  little bit longer.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="50%" src={process.env.PUBLIC_URL + "./images/Istiqur-Rahman.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Md. Istiqur Rahman</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This card has supporting text below as .</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/ferdous.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>FHM Fokhruddin</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Moumita-Baral.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Moumita Baral</CardTitle>
                                    <CardSubtitle>Junior Software Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/nasrin-sultana.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Nasrin Sultana Khan</CardTitle>
                                    <CardSubtitle>Degital Marketing Executive</CardSubtitle>
                                    <CardText>This is a  text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Partho-Kundu.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name </CardTitle>
                                    <CardSubtitle>Employee Designation</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                
                        </CardGroup>

                        </TabPanel>
                        <TabPanel value={value} index={2}>
                        <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Partho-Kundu.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name 1</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  little bit longer.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="50%" src={process.env.PUBLIC_URL + "./images/Istiqur-Rahman.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name 2</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This card has supporting text below as .</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Partho-Kundu.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name 3</CardTitle>
                                    <CardSubtitle>Web Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Moumita-Baral.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name 4</CardTitle>
                                    <CardSubtitle>Junior Software Developer</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/nasrin-sultana.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name 5</CardTitle>
                                    <CardSubtitle>Degital Marketing Executive</CardSubtitle>
                                    <CardText>This is a  text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top width="100%" src={process.env.PUBLIC_URL + "./images/Partho-Kundu.jpg"} alt="Logo" width="100px" />
                                    <CardBody>
                                    <CardTitle>Employee Name 6</CardTitle>
                                    <CardSubtitle>Employee Designation</CardSubtitle>
                                    <CardText>This is a wider card with supporting text  content.</CardText>
                                    <Button>Know More</Button>
                                    </CardBody>
                                </Card>
                                
                        </CardGroup>
                        </TabPanel>
                        </div>
                    );
                    }
  export default TabLinks