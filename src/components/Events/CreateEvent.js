import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Button from '@material-ui/core/Button';
import { push, map } from "lodash"


const useStyles = (theme) => ({

    Container: {
        width: "100%",
        display: "flex",
        backgroundColor: "#DFDFDF",
        margin: 10
    },
    TextField: {
        margin: 10,
        width: "100%"
    },
    Typography: {
        margin: 20
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
})

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fee: '',
            Category: '',
            eventType: '',
            tags: [],
            tag: '',
            prequest: '',
            prequesties: []
        }
        this.onaddTagClick = this.onaddTagClick.bind(this);
        this.emailFieldChange = this.emailFieldChange.bind(this);
        this.passkeyFieldChange = this.passkeyFieldChange.bind(this);
        this.handleFeeChange = this.handleFeeChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleeventTypeChange = this.handleeventTypeChange.bind(this);
        this.tagFieldChange = this.tagFieldChange.bind(this);
        this.prequestiesFieldChange = this.prequestiesFieldChange.bind(this);
        this.onprequestiesClick = this.onprequestiesClick.bind(this);



    }
    tagFieldChange = (passKey) => {


        this.setState({ tag: passKey.target.value })
    }
    prequestiesFieldChange = (passKey) => {


        this.setState({ prequest: passKey.target.value })
    }
    emailFieldChange = (passKey) => {


        this.setState({ username: passKey.target.value })
    }
    passkeyFieldChange = (passKey) => {
        this.setState({ password: passKey.target.value })
    }
    onaddTagClick() {
        this.setState({ tags: this.state.tags + this.state.tag })
    }
    onprequestiesClick() {
        this.setState({ tags: this.state.prequesties + this.state.prequest })
    }
    handleFeeChange = (event) => {
        this.setState({ fee: event.target.value });
    };
    handleCategoryChange = (event) => {
        this.setState({ Category: event.target.value });
    };
    handleeventTypeChange = (event) => {
        this.setState({ eventType: event.target.value });
    };
    render() {
        const { classes } = this.props;
        return (

            <Container component="main" className={classes.Container}>
                <div style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: "center"
                }}>
                    <Typography component="h1" variant="h5" className={classes.Typography}>
                        CreateEvent
                       </Typography>
                    <div style={{ margin: 10, alignSelf: "center" }}>


                        <TextField id="outlined-basic" label="Title" variant="outlined" className={classes.TextField} />
                        <TextField id="outlined-basic" label="Seat Available" variant="outlined" className={classes.TextField} />
                        <TextField id="outlined-basic" label="Entry Fee" variant="outlined" className={classes.TextField} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" className={classes.TextField} multiline rows={12} />
                        <TextField id="outlined-basic" label="Address" variant="outlined" className={classes.TextField} multiline rows={4} />
                        <TextField id="outlined-basic" label="Latitude" variant="outlined" className={classes.TextField} />
                        <TextField id="outlined-basic" label="Longitude" variant="outlined" className={classes.TextField} />
                        <Calendar
                        // onChange={this.onChange}
                        // value={this.state.date}
                        // activeStartDate={this.state.date}

                        // onClickYear={this.onClickYear}
                        // onClickDay={this.onClickDay}
                        // onClickMonth={this.onClickMonth}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Fee</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.fee}
                                onChange={this.handleFeeChange}
                            >
                                <MenuItem value={1}>Paid</MenuItem>
                                <MenuItem value={2}>Free</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.Category}
                                onChange={this.handleCategoryChange}
                            >
                                <MenuItem value={1}>seminar</MenuItem>
                                <MenuItem value={2}>symposium</MenuItem>
                                <MenuItem value={3}>conferences</MenuItem>
                                <MenuItem value={4}>webinars</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.eventType}
                                onChange={this.handleeventTypeChange}
                            >
                                <MenuItem value={1}>Oral and Maxillofacial Surgeon</MenuItem>
                                <MenuItem value={2}>Periodontist</MenuItem>
                                <MenuItem value={3}>Paedodontist</MenuItem>
                                <MenuItem value={4}>Oral Pathologist</MenuItem>
                            </Select>
                        </FormControl>
                        <div style={{ margin: 10, alignSelf: "center", width: "20%" }}>
                            <TextField id="outlined-basic" label="Tags" variant="outlined" className={classes.TextField}
                                value={this.state.tag}
                                onChange={this.tagFieldChange}
                            />
                            <Button type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: 25,
                                }}
                                onClick={this.onaddTagClick}
                            >
                                Add Tag
          </Button>
                            {this.state.tags && map(this.state.tags, (tag, key) => {
                                return (<Typography component="h1" className={classes.Typography}>
                                    <p className="text-muted font-14">{tag}</p>

                                </Typography>)
                            })}
                        </div>
                        <div style={{ margin: 10, alignSelf: "center", width: "20%" }}>
                            <TextField id="outlined-basic" label="Tags" variant="outlined" className={classes.TextField}
                                value={this.state.prequest}
                                onChange={this.prequestiesFieldChange}
                            />
                            <Button type="submit"
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: 25,
                                }}
                                onClick={this.onprequestiesClick}
                            >
                                Add prequesties
          </Button>
                            {this.state.tags && map(this.state.prequesties, (tag, key) => {
                                return (<Typography component="h1" className={classes.Typography}>
                                    <p className="text-muted font-14">{tag}</p>

                                </Typography>)
                            })}
                        </div>
                    </div>
                </div>
            </Container >

        );
    }
}
export default withStyles(useStyles)(CreateEvent);