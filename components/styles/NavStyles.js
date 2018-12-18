import styled from "styled-components";

const NavStyles = styled.div`
	a {
		color: #f8f8f8;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.workflow_dashboard--nav-wrapper {
		background-color: #242424;
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

export default NavStyles;
