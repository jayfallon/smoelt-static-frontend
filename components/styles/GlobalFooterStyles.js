import styled from "styled-components";

const GlobalFooter = styled.footer`
	margin: 0 auto;
	padding: 4.5rem 1rem 10rem;
	max-width: 84.4rem;
	color: #ffffff;
	font-size: 1.3rem;
	line-height: 1.54;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;

	a {
		color: #ffffff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.sapphire_footer--info-nav {
		margin: 0 auto;
	}

	.sapphire_footer--info-nav ul {
		display: flex;
		justify-content: center;
	}

	.sapphire_footer--info-nav ul li {
		padding: 0 1.5rem;
		font-size: 1.3rem;
		text-transform: capitalize;
		list-style: none;
		position: relative;
	}

	.sapphire_footer--info-nav ul li:nth-child(2):before {
		content: "|";
		position: absolute;
		left: 0;
	}

	.sapphire_footer--info-nav ul li:nth-child(2):after {
		content: "|";
		position: absolute;
		right: 0;
	}

	.sapphire_footer--content {
		padding-bottom: 4rem;
		font-size: 1.3rem;
		text-align: center;
	}

	nav.sapphire_footer--social-nav {
		padding-bottom: 8rem;
	}

	nav.sapphire_footer--social-nav ul {
		margin: 0 auto;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	nav.sapphire_footer--social-nav li {
		padding: 0 1.5rem;
		width: 3.6rem;
		height: 3.6rem;
		color: hsla(0, 0%, 44%, 1);
		position: relative;
		display: flex;
		align-items: center;
	}

	li.item-facebook a,
	li.item-twitter a,
	li.item-youtube a,
	li.item-instagram a {
		background-image: url(/static/images/GD_iconset.svg);
		width: 3.6rem;
		height: 3.6rem;
		position: absolute;
	}

	nav.sapphire_footer--social-nav li a {
		background-repeat: no-repeat;
		color: hsla(0, 0%, 44%, 1);
	}

	nav.sapphire_footer--social-nav li.item-facebook a {
		background-position: -30px -1053px;
	}

	nav.sapphire_footer--social-nav li.item-facebook a:hover {
		background-position: -30px -1117px;
	}

	nav.sapphire_footer--social-nav li.item-twitter a {
		background-position: -95px -1053px;
	}

	nav.sapphire_footer--social-nav li.item-twitter a:hover {
		background-position: -95px -1117px;
	}

	nav.sapphire_footer--social-nav li.item-youtube a {
		background-position: -157px -1053px;
	}

	nav.sapphire_footer--social-nav li.item-youtube a:hover {
		background-position: -157px -1117px;
	}

	nav.sapphire_footer--social-nav li.item-instagram a {
		background-position: -220px -1053px;
	}

	nav.sapphire_footer--social-nav li.item-instagram a:hover {
		background-position: -220px -1117px;
	}

	nav.sapphire_footer--social-nav li span {
		display: none;
	}
`;

export default GlobalFooter;
