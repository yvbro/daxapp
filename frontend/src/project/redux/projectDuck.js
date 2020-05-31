import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import {fulfilled, pending, rejected} from '../../helpers/promise';

const initialState = {
    projectsList: {
        data: [],
        loading: false,
    },
    selectedProject: {
        data: undefined,
        loading: false,
    },
};

const FETCH_PROJECTS = "[Auth] FETCH LIST OF PROJECTS";
const FETCH_PROJECT = "[Auth] FETCH ONE PROJECT";

export default function project(state = initialState, action) {
    switch (action.type) {
        case pending(FETCH_PROJECTS):
            return {
                ...state,
                projectsList: {
                    data: [],
                    loading: true,
                }
            };
        case fulfilled(FETCH_PROJECTS):
            return {
                ...state,
                projectsList: {
                    data: action.payload.data,
                    loading: false,
                }
            };
        case rejected(FETCH_PROJECTS):
            return {
                ...state,
                projectsList: {
                    data: state.projectsList.data,
                    loading: false,
                }
            };
        case pending(FETCH_PROJECT):
            return {
                ...state,
                selectedProject: {
                    data: [],
                    loading: true,
                }
            };
        case fulfilled(FETCH_PROJECT):
            return {
                ...state,
                selectedProject: {
                    data: action.payload.data,
                    loading: false,
                }
            };
        case rejected(FETCH_PROJECT):
            return {
                ...state,
                selectedProject: {
                    data: state.selectedProject.data,
                    loading: false,
                }
            };
        default:
            return state
    }
}

export const fetchProjects = () => dispatch =>
    dispatch({
        type: FETCH_PROJECTS,
        payload: axios.get("/private/projects")
    });

export const fetchProject = (projectId) => dispatch =>
    dispatch({
        type: FETCH_PROJECT,
        payload: axios.get(`/private/projects/${projectId}`)
    });
