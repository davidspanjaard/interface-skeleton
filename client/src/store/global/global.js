//Global config params

const SET_SNACKBAR = "SET_SNACKBAR";
const SET_POPUPS = "SET_POPUPS";
const PUSH_POPUP = "PUSH_POPUP";

export const moduleGlobal = {
    namespaced: true,
    state: () => ({
        feedbackSnackbar: {
            text: "",
            visible: false,
            color: "orange",
            persistent: false,
        },
        popups: [],

    }),
    mutations: {
        [SET_SNACKBAR](state, feedbackSnackbar) {
            state.feedbackSnackbar = feedbackSnackbar || {
                text: "",
                visible: false,
                color: "orange",
                persistent: false,
            };
        },
        [PUSH_POPUP](state, popup) {
            state.popups.push(popup);
        },
        [SET_POPUPS](state, popups) {
            state.popups = popups;
        },
    },
    actions: {
        //pushSnackbar pushes a snackbar to the UI with the intention
        //of communicating a message to the user.
        //
        //The function takes the following arguments:
        //  text: the text that will be displayed in the snackbar.
        //  color: the color of the snackbar.
        //  persistent(optional): optional specification of whether snackbar
        //      should be persistent, ie. only close when close is clicked.
        //      Default is false and can be set to true.
        pushSnackbar({ commit }, {text, color, persistent = false}) {
            commit(SET_SNACKBAR, {
                text: text,
                visible: true,
                color: color,
                persistent: persistent,
            });
        },
        closeSnackbar({ commit }) {
            commit(SET_SNACKBAR, {
                text: null,
                visible: false,
                color: null,
                persistent: false,
            });
        },

        //POPUPS

        //pushPopup takes a config object, defined
        pushPopup({ commit }, popupConfig ){
            let popup = {
                id: crypto.randomUUID(),
                ...popupConfig,
                elevation: 0,
                fullScreenVisible: false,
                state: "Loading", //state can be Loading,Ready or Failed. Popup will by default enter the loading state
                //Should I include something about the selected state?
            };

            commit(PUSH_POPUP, popup);
        },
        //gives given popup higher elevation and gives rest 0 elevation
        pushPopupToFront({ commit, state }, popupID ){
            let alteredPopups = state.popups.map((d) => {
            if(d.id === popupID) {
                d.elevation = 4;
            } else {
                d.elevation = 0;
            }
            return d;
            });

            commit(SET_POPUPS, alteredPopups);
        },
        closePopup({ commit, state }, popupID){
            let filteredPopups = state.popups.filter((d) => d.id !== popupID);

            commit(SET_POPUPS, filteredPopups);
        },
        closeAllPopups({ commit}){
            commit(SET_POPUPS, []);
        },
        updatePopupState({ commit, state }, {popupID, newState}){
            let alteredPopups = state.popups.map((d) => {
                if(d.id === popupID) {
                    d.state = newState;
                }
                return d;
            });

            commit(SET_POPUPS, alteredPopups);
        },
        maximisePopup({ commit, state }, popupID){
            let alteredPopups = state.popups.map((d) => {
                if(d.id === popupID) {
                    d.fullScreenVisible = true;
                }
                return d;
            });

            commit(SET_POPUPS, alteredPopups);
        },
        minimisePopup({ commit, state }, popupID){
            let alteredPopups = state.popups.map((d) => {
                if(d.id === popupID) {
                    d.fullScreenVisible = false;
                }
                return d;
            });

            commit(SET_POPUPS, alteredPopups);
        }

    },
};
