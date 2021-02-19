import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CameraIcon from '@material-ui/icons/Camera';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {
    List,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItem,
    Card,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    cardInfo: {
        borderRadius: '16px',
    },
});

const ProjectInfo = ({ project }) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5" gutterBottom>Project Information</Typography>
            <Card className={classes.cardInfo}>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Subject"
                            secondary={project.numberOfSubject}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventNoteIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Session"
                            secondary={project.numberOfSession}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CameraIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Scan"
                            secondary={project.numberOfScan}
                        />
                    </ListItem>
                    {project.assessors && (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <DeviceHubIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Processes"
                                secondary={project.assessors.length}
                            />
                        </ListItem>
                    )}
                </List>
            </Card>
        </>
    );
};

ProjectInfo.propTypes = {
    project: PropTypes.object.isRequired,
};

export default ProjectInfo;
