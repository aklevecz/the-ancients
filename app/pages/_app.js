import { Provider } from "react-redux";
import { useStore } from "../store";
import Layout from "../components/Layout";
import "../styles/globals.css";
import * as actions from "../actions";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    useEffect(() => {
        store.dispatch(actions.initThenGetBalance());

        // store.dispatch(actions.getRatBalance());
    }, []);
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
