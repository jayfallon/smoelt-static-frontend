import Link from "next/link";
import styled from "styled-components";
import { CreateButton } from "./styles/SubmitButton";

const NavStyles = styled.div`
	background-color: #242424;
	a {
		color: #f8f8f8;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.workflow_dashboard--nav-wrapper {
		padding: ${props => props.theme.padding};
	}

	nav.workflow_dashboard--nav {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
		height: 8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav.workflow_dashboard--nav ul {
		display: flex;
		align-items: center;
	}

	ul.workflow_dashboard--logo li:first-child {
		padding-right: 2.65rem;
		height: 8rem;
		width: 8rem;
	}

	ul.workflow_dashboard--logo h3 {
		padding-left: 2.65rem;
		border-left: 0.2rem solid #f8f8f8;
		color: #f8f8f8;
		font-family: GothamBold, sans-serif;
		font-size: 1.8rem;
		letter-spacing: 0.23rem;
		text-transform: uppercase;
	}

	ul.workflow_dashboard--menu li {
		margin: 0 0 0 3rem;
	}

	ul.workflow_dashboard--menu a {
		font-family: GothamBold, sans-serif;
		font-size: 1.2rem;
		text-transform: uppercase;
	}
`;

const Logo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		background-image: url(/static/images/smoelt-logo-dash.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 8rem 8rem;
		width: 8rem;
		height: 8rem;
	}

	span {
		display: none;
	}
`;

const Nav = () => (
	<NavStyles>
		<nav className="workflow_dashboard--nav">
			<ul className="workflow_dashboard--logo">
				<li>
					<Logo>
						<a href="/dashboard">
							<span>Smoelt &amp; Co.</span>
						</a>
					</Logo>
				</li>
				<li>
					<h3>landing pages</h3>
				</li>
			</ul>
			<ul className="workflow_dashboard--menu">
				<li>
					<Link href="/create">
						<CreateButton type="button">create!</CreateButton>
					</Link>
				</li>
				<li>
					<Link href="/profile">
						<a>Profile</a>
					</Link>
				</li>
				<li>
					<Link href="/help">
						<a>help</a>
					</Link>
				</li>
				<li>
					<Link href="/faq">
						<a>faq</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>contact</a>
					</Link>
				</li>
				<li>
					<Link href="/signout">
						<a>sign out</a>
					</Link>
				</li>
			</ul>
		</nav>
	</NavStyles>
);

export default Nav;
