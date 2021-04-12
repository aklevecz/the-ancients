import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmName from "../components/votes/ConfirmName";
import PickName from "../components/votes/PickName";
import { RootState } from "../store";
import styles from "../styles/Vote.module.css";
import { VoteViewStates } from "../reducers";
import { useRouter } from "next/router";
import { setProposedName, setViewState } from "../actions";

export default function Votes({ imgSrc, currentVote }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const vote = useSelector((state: RootState) => state.vote);
    const containerRef = useRef(null);
    // const [dims, setDims] = useState({ width: 0, height: 0 });
    // useEffect(() => {
    //     if (!containerRef && !containerRef.current) {
    //         return;
    //     }
    //     const { width, height } = containerRef.current.getBoundingClientRect();
    //     setDims({ width: width * 0.9, height: height / 1.5 });
    // }, []);

    useEffect(() => {
        const historyChange = () => {
            const path = window.location.pathname;
            if (path === "/vote") {
                dispatch(setViewState(VoteViewStates.PICK_NAME));
            } else if (path === "/vote/confirm-name") {
                dispatch(setViewState(VoteViewStates.CONFIRM_NAME));
            }
        };
        window.addEventListener("popstate", historyChange, false);

        return () =>
            window.removeEventListener("popstate", historyChange, false);
    }, [router]);

    const onInputChange = (e) => {
        dispatch(setProposedName(e.target.value));
    };

    const proposeName = () => {
        dispatch(setViewState(VoteViewStates.CONFIRM_NAME));
        window.history.pushState({}, "", "/vote/confirm-name");
    };
    // const imgUrl = `${ipnsFolder}/${currentVote}`
    return (
        <div ref={containerRef} className={styles.container}>
            {vote.view === VoteViewStates.PICK_NAME && (
                <PickName
                    imgSrc={imgSrc}
                    currentVote={currentVote}
                    onInputChange={onInputChange}
                    proposeName={proposeName}
                />
            )}
            {vote.view === VoteViewStates.CONFIRM_NAME && (
                <ConfirmName proposedName={vote.proposedName} imgUrl={imgSrc}/>
            )}
        </div>
    );
}
