import App, { Container } from "next/app";
import Page from "../components/Page";

import ReactGA from "react-ga";

ReactGA.initialize("UA-128755999-1");

ReactGA.pageview("/landing-pages/sweet-1092342");

class MyApp extends App {
	render() {
		const { Component } = this.props;

		return (
			<Container>
				<Page>
					<Component />
				</Page>
			</Container>
		);
	}
}

export default MyApp;
