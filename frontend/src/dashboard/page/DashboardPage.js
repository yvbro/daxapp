import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../../app/AppLayout';
import { Grid, makeStyles } from '@material-ui/core';
import PrearchiveDashboard from '../dump/PrearchiveDashboard';
import RecentActivitiesDashboard from '../dump/RecentActivitiesDashboard';
import ProjectDashboard from '../dump/ProjectDashboard';
import { fetchRecentActivities, fetchPreAchives } from '../redux/dashboardDuck';
import { fetchProjects } from '../../project/redux/projectDuck';
import { toast } from 'react-toastify';
import _get from 'lodash/get';
import LoadingIndicator from '../../common/LoadingIndicator';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const DashboardPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {
        recentActivities,
        loadingRecentActivities,
        preArchives,
        loadingPreArchives,
        projects,
        loadingProjects,
        xnatHost,
    } = useSelector((state) => ({
        recentActivities: state.dashboard.recentActivities.data,
        loadingRecentActivities: state.dashboard.recentActivities.loading,
        preArchives: state.dashboard.preArchives.data,
        loadingPreArchives: state.dashboard.preArchives.loading,
        projects: state.project.projectsList.data,
        loadingProjects: state.project.projectsList.loading,
        xnatHost: state.auth.currentUser.xnatHost,
    }));

    useEffect(() => {
        dispatch(fetchProjects())
            .then(() => {
                dispatch(fetchPreAchives());
                dispatch(fetchRecentActivities());
            })
            .catch((error) => {
                toast.error(_get(error, 'response.data.message', null));
          });
    }, [dispatch]);

    if( loadingProjects ) {
        return <LoadingIndicator />
    }

    return (
        <AppLayout>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <RecentActivitiesDashboard
                            recentActivities={recentActivities}
                            loadingRecentActivities={loadingRecentActivities}
                            xnatHost={xnatHost}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <PrearchiveDashboard
                            preArchives={preArchives}
                            loadingPreArchives={loadingPreArchives}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <ProjectDashboard
                            projects={projects}
                            loadingProjects={loadingProjects}
                        />
                    </Grid>
                </Grid>
            </div>
        </AppLayout>
    );
};

export default DashboardPage;
