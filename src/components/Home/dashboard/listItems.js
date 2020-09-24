import React from 'react';
import PropTypes from "prop-types"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BathtubIcon from '@material-ui/icons/Bathtub';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ForumIcon from '@material-ui/icons/Forum';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


class MainListItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEventClicked: false,
            isPmsClicked: false,
            isServicesClicked: false,
            isConsultationClicked: false,
            isDoctorsClicked: false,
            isHospitalClicked: false,
            isLaborderClicked: false,
            isForumClicked: false,
            isTransactionsClicked: false,
            getTabnumberClicker: 1
        }

    }

    render() {
        return (

            <div>
                <div>
                    <ListItem button onClick={() => {
                        this.props.sendData(1)
                    }}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </div>

                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isEventClicked: !prevState.isEventClicked
                        }))
                    }}>
                        <ListItemIcon>
                            <EventAvailableIcon />
                        </ListItemIcon>
                        <ListItemText primary="Events" />


                    </ListItem>
                    {this.state.isEventClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(2)
                            }}>
                                <ListItemIcon>
                                    <EventAvailableIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create Event" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(3)
                            }}>
                                <ListItemIcon>
                                    <EventAvailableIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Event" />
                            </ListItem>

                        </div>
                    }
                </div>

                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isPmsClicked: !prevState.isPmsClicked

                        }))
                    }}>
                        <ListItemIcon>
                            <PeopleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="PMS" />


                    </ListItem>
                    {this.state.isPmsClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(4)
                            }}>
                                <ListItemIcon>
                                    <PeopleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Patient" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(5)
                            }}>
                                <ListItemIcon>
                                    <PeopleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Hospitals" />
                            </ListItem>

                        </div>
                    }
                </div>

                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isDoctorsClicked: !prevState.isDoctorsClicked
                        }))

                    }}>
                        <ListItemIcon>
                            <AccessibilityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Doctors" />


                    </ListItem>
                    {this.state.isDoctorsClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(6)
                            }}>
                                <ListItemIcon>
                                    <AccessibilityIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Doctors" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(7)
                            }}>
                                <ListItemIcon>
                                    <AccessibilityIcon />
                                </ListItemIcon>
                                <ListItemText primary="Verify Doctors" />
                            </ListItem>

                        </div>
                    }
                </div>

                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isHospitalClicked: !prevState.isHospitalClicked
                        }))
                    }}>
                        <ListItemIcon>
                            <AirlineSeatReclineExtraIcon />
                        </ListItemIcon>
                        <ListItemText primary="Clincs" />


                    </ListItem>
                    {this.state.isHospitalClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(8)
                            }}>
                                <ListItemIcon>
                                    <AirlineSeatReclineExtraIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Clinics" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(9)
                            }}>
                                <ListItemIcon>
                                    <AirlineSeatReclineExtraIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Clinics" />
                            </ListItem>

                        </div>
                    }
                </div>

                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isLaborderClicked: !prevState.isLaborderClicked
                        }))
                    }}>
                        <ListItemIcon>
                            <BathtubIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lab Orders" />


                    </ListItem>
                    {this.state.isLaborderClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(10)
                            }}>
                                <ListItemIcon>
                                    <BathtubIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Patient" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(11)
                            }}>
                                <ListItemIcon>
                                    <BathtubIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Hospitals" />
                            </ListItem>

                        </div>
                    }
                </div>
                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isServicesClicked: !prevState.isServicesClicked
                        }))
                    }}>
                        <ListItemIcon>
                            <RoomServiceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Services" />


                    </ListItem>
                    {this.state.isServicesClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(12)
                            }}>
                                <ListItemIcon>
                                    <RoomServiceIcon />
                                </ListItemIcon>
                                <ListItemText primary="Service Types" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(13)
                            }}>
                                <ListItemIcon>
                                    <RoomServiceIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Services" />
                            </ListItem>

                        </div>
                    }
                </div>
                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isConsultationClicked: !prevState.isConsultationClicked
                        }))
                    }}>
                        <ListItemIcon>
                            <EmojiPeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Consultation" />


                    </ListItem>
                    {this.state.isConsultationClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(14)
                            }}>
                                <ListItemIcon>
                                    <EmojiPeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Consultant" />
                            </ListItem>
                            <ListItem button onClick={() => {

                                this.props.sendData(15)
                            }}>
                                <ListItemIcon>
                                    <EmojiPeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Consultations" />
                            </ListItem>

                        </div>
                    }
                </div>
                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isForumClicked: !prevState.isForumClicked
                        }))
                    }}>
                        <ListItemIcon >
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Forum" />


                    </ListItem>
                    {this.state.isForumClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(16)
                            }}>
                                <ListItemIcon>
                                    <ForumIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Forum" />
                            </ListItem>
                        </div>
                    }
                </div>
                <div >
                    <ListItem button onClick={() => {
                        this.setState(prevState => ({
                            isTransactionsClicked: !prevState.isTransactionsClicked
                        }))
                    }}>
                        <ListItemIcon>
                            <ReceiptIcon />
                        </ListItemIcon>
                        <ListItemText primary="Transactions" />


                    </ListItem>
                    {this.state.isTransactionsClicked &&
                        <div style={{ marginTop: 10, paddingLeft: 25 }}>
                            <ListItem button onClick={() => {

                                this.props.sendData(17)
                            }}>
                                <ListItemIcon>
                                    <ReceiptIcon />
                                </ListItemIcon>
                                <ListItemText primary="View Transactions" />
                            </ListItem>
                        </div>
                    }
                </div>

            </div >
        )
    }
}
MainListItems.propTypes = {
    sendData: PropTypes.func,
};
export default MainListItems;


