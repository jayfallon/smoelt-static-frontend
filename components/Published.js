import Link from "next/link";
import styled from "styled-components";
import { SubmitButton, PreviewButton } from "./styles/SubmitButton";
import CreateStyles from "./styles/CreateStyles";

const PublishedStyles = styled.div`
	margin: 0 auto;
	width: 60rem;
	height: 80rem;
	display: grid;
	grid-gap: 0;
	grid-template-columns: 5rem auto 5rem;
	grid-template-rows: 5rem auto auto auto 5rem;
	.image {
		grid-area: 1/1/6/4;
	}
	.cover {
		grid-area: 2/2/5/3;
	}
	h2.title {
		padding: 6rem 2rem 2rem;
		font-family: GothamBold, sans-serif;
		font-size: 4.6rem;
		text-align: center;
		grid-area: 2/2/3/3;
	}
	.description {
		padding: 4rem 2rem;
		font-size: 2rem;
		text-align: center;
		grid-area: 3/2/4/3;
	}
	form {
		padding: 4rem 2rem;
		grid-area: 4/2/5/3;
	}

	.sapphire_form--group {
		margin-bottom: 3.2rem;
		display: flex;
		flex-direction: column;
	}

	.sapphire_form--group label {
		padding-bottom: 0.8rem;
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
		line-height: 1.25;
	}

	.sapphire_form--group input[type="text"],
	.sapphire_form--group input[type="email"],
	.sapphire_form--group input[type="password"],
	.sapphire_form--group textarea {
		background-color: #f8f8f8;
		padding: 1.2rem 1.4rem;
		border: 0.1rem solid #cecece;
		font-size: 1.6rem;
		z-index: 500;
	}

	.sapphire_form--group input[type="checkbox"] {
		background-color: #181818;
		margin-right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.1rem solid #fff;
	}

	.sapphire_form--group span {
		font-family: GothamBook;
		font-size: 1.4rem;
	}

	.sapphire_form--group.form-submit {
		margin-top: 4.4rem;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
`;

const Published = props => (
	<PublishedStyles>
		<CreateStyles />
		<div className="image">
			<img src="/static/images/the-anchor-28037-unsplash.png" alt="The Anchor" />
		</div>
		<div className="cover">
			<img src="/static/images/cover-white.png" alt="The Anchor" />
		</div>
		<h2 className="title">Secret Dinner at The Anchor</h2>
		<div className="description">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate explicabo illum rem consequatur
			quibusdam voluptatem, ab quasi eaque in, modi tempora id fuga dolorem!
		</div>
		<form action="">
			<div className="sapphire_form--group">
				<label htmlFor="email_address">Your Email Address Please</label>{" "}
				<input type="email" id="email_address" />
			</div>
			<div className="sapphire_form--group form-submit">
				<Link href="/preview">
					<SubmitButton type="submit">sign me up!!</SubmitButton>
				</Link>
			</div>
		</form>
	</PublishedStyles>
);

export default Published;
