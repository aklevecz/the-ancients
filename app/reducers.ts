import { combineReducers } from "redux";
import * as types from "./types";

const initialWalletState = {
    address: 0x0,
    signer: null,
    provider: null,
    ratBalance: null,
};

const walletReducer = (state = initialWalletState, { type, payload }) => {
    switch (type) {
        case types.SET_ADDRESS:
            return { ...state, address: payload.address };
        case types.INIT_WALLET:
            return {
                ...state,
                address: payload.address,
                signer: payload.signer,
                provider: payload.provider,
            };
        case types.SET_RAT_BALANCE:
            return {...state, ratBalance: payload.ratBalance}
        default:
            return state;
    }
};

// INITIAL TIMER STATE
export enum VoteViewStates {
    PICK_NAME,
    CONFIRM_NAME,
}
const initialVoteState = {
    proposedName: "",
    view: VoteViewStates.PICK_NAME,
};

// TIMER REDUCER
const voteReducer = (state = initialVoteState, { type, payload }) => {
    switch (type) {
        case types.SET_PROPOSED_NAME:
            return {
                ...state,
                proposedName: payload.proposedName,
            };
        case types.SET_VOTE_VIEW:
            return {
                ...state,
                view: payload.view,
            };
        default:
            return state;
    }
};

// COMBINED REDUCERS
const reducers = {
    wallet: walletReducer,
    vote: voteReducer,
};

export default combineReducers(reducers);
