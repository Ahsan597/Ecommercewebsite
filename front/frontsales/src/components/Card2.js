import React from 'react'
import ButtonBase from "@material-ui/core/ButtonBase";
import Tabs from '@mui/material/Tabs';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import "./Card2.css";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BuildIcon from '@mui/icons-material/Build';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import StarsIcon from '@mui/icons-material/Stars';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ChairIcon from '@mui/icons-material/Chair';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, Typography, CardHeader } from '@material-ui/core/'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))


export default function Card2() {

    const [value, setValue] = React.useState(0);
    const classes = useStyles()
    const data = [{}]
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className=" ">
                <div className="productsicon producticon22">

                    <Box sx={{ maxWidth: 1200, bgcolor: 'background.paper' }}> <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <div className="productall">
                            <Link className="productlink" to="/deals">
                                <StarsIcon className="productcolor" style={{ fontSize: 100 }} fontSize="small"></StarsIcon>
                                <p className="productname">All products</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="/ddevice"> <ImportantDevicesIcon className="productcolor" style={{ fontSize: 100 }}></ImportantDevicesIcon>
                                < p className="productname">Devices</p></Link>
                        </div>
                        <div className="productall" >
                            <Link className="productlink" to="/dphone">
                                <PhoneAndroidIcon className="productcolor" style={{ fontSize: 100 }}></PhoneAndroidIcon>
                                <p className="productname">Phones</p></Link>
                        </div>
                        <div>
                            <Link className="productlink" to="/dtoys">
                                <SmartToyIcon className="productcolor" style={{ fontSize: 100 }}></SmartToyIcon>
                                <p className=" prodtoy">Toys</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="dsports">
                                <SportsCricketIcon className="productcolor" style={{ fontSize: 100 }}></SportsCricketIcon>
                                <p className="productname">Sports</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="dchild">
                                <ChildCareIcon className="productcolor" style={{ fontSize: 100 }}></ChildCareIcon>
                                <p className="productname">Children</p></Link>
                        </div>
                    </Tabs></Box>
                </div>
            </div>
            <div className="dealscol">
                <div className="categories">
                    <h4>Categories</h4>
                    <div className="divproducts">
                        <Link to="/deals" className="productlink "><p className=" prodlink">All products</p></Link>
                        <Link to="/ddevice" className="productlink"><p className=" prodlink">Devices</p></Link>
                        <Link to="/dphone" className="productlink "><p className="prodlink">Phone</p></Link>
                        <Link to="/dchild" className="productlink"><p className=" prodlink">Children</p></Link>
                        <Link to="/dtoys" className="productlink "><p className=" prodlink">Toys</p></Link>
                        <Link to="/dsports" className="productlink"><p className=" prodlink">Sports</p></Link>
                    </div>
                </div>
                <div className="dailydeals">
                    <h1 className="dailyweek">Daily Deals
                    </h1>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {data.map(elem => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Card cols={3} className="carddeal">
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className="weeklydeals">
                    <h1 className="dailyweek">Weekly Deals
                    </h1>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {data.map(elem => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Card cols={3} className="carddeal">
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </div>
            <div className=" relateddeals">
                <div className="relatedproduct">
                    <p className="relateddeals">Related to your shopping history</p>
                </div><hr></hr>
            </div>
        </div >


    )
}