import getWeb3Provider from "./libs/getWeb3Provider";
import initRatContract from "./libs/initRatContract";
import {
    INIT_WALLET,
    SET_PROPOSED_NAME,
    SET_RAT_BALANCE,
    SET_VOTE_VIEW,
} from "./types";

export const setProposedName = (proposedName) => (dispatch) =>
    dispatch({ type: SET_PROPOSED_NAME, payload: { proposedName } });
export const setViewState = (view) => (dispatch) =>
    dispatch({ type: SET_VOTE_VIEW, payload: { view } });
export const setRatBalance = (ratBalance: number) => (dispatch) =>
    dispatch({ type: SET_RAT_BALANCE, payload: { ratBalance } });

export const getRatBalance = () => (dispatch, getState) => {
    const wallet = getState().wallet;
    if (!wallet.address) {
        return null;
    }
    const contract = initRatContract(wallet);
    contract
        .balanceOf(wallet.address, { from: wallet.address })
        .then((balance) => {
            dispatch(setRatBalance(parseInt(balance, 10)));
        });
};

export const initWallet = () => (dispatch) => {
    const provider = getWeb3Provider();
    if (!provider) {
        return null;
    }
   return window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: any) => {
            const signer = provider.getSigner();
            console.log("inited")
            dispatch({
                type: INIT_WALLET,
                payload: { signer, address: accounts[0], provider },
            });
        });
};

export const initThenGetBalance = () => async dispatch => {
    await dispatch(initWallet())
    await dispatch(getRatBalance())
}