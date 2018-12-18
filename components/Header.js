import Router from "next/router";
import Nav from "./Nav";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
Router.onRouteChangeError = () => {
	NProgress.done();
};

const Header = () => <Nav />;

export default Header;
