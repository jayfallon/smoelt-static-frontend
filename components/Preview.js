import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";
import BackstageFooter from "./BackstageFooter";
import CreateStyles from "./styles/CreateStyles";
import { SubmitButton, PreviewButton } from "./styles/SubmitButton";

const PreviewContent = styled.section`
	background-color: #f8f8f8;
	padding: 8rem 0 16rem;
	.preview_inner {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: 62rem;
	}
	h3 {
		padding-bottom: 2.5rem;
		font-family: GothamBold, sans-serif;
		font-size: 2.8rem;
		line-height: 1.71;
		letter-spacing: 2.5px;
		text-align: center;
		text-transform: uppercase;
	}

	legend {
		display: none;
	}

	.sapphire_form--group {
		margin-bottom: 3.2rem;
		display: flex;
		flex-direction: column;
	}

	.sapphire_form--group.form-check {
		flex-direction: row;
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

	.sapphire_form--group.form-gate {
		padding-bottom: 10rem;
		font-family: GothamBold, sans-serif;
		font-size: 1.7rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.sapphire_form--group.form-gate span {
		margin-right: 0.8rem;
	}

	.sapphire_form--group.reset-message {
		font-size: 1.6rem;
		line-height: 1.44;
	}

	.sapphire_form--group.password-forgot {
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
	}

	.form-submit ul {
		margin-top: 8rem;
		display: flex;
		align-items: center;
		li {
			margin: 0 2rem;
			a {
				color: #121212;
				font-size: 1.6rem;
			}
		}
	}

	.ga_display {
		padding-bottom: 2rem;
		font-size: 18px;
		text-align: center;
	}

	.create_preview--grid {
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
			z-index: 500;
		}
	}
`;

const Create = props => (
	<div>
		<CreateStyles />
		<Header />
		<main>
			<PreviewContent>
				<div className="preview_inner">
					<h3>Preview</h3>
					<div className="ga_display">
						<p>Google Analytics ID: UA-128755999-1</p>
					</div>
					<div className="create_preview--grid">
						<div className="image">
							<img src="/static/images/the-anchor-28037-unsplash.png" alt="The Anchor" />
						</div>
						<div className="cover">
							<img src="/static/images/cover-white.png" alt="The Anchor" />
						</div>
						<h2 className="title">Secret Dinner at The Anchor</h2>
						<div className="description">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate explicabo illum rem
							consequatur quibusdam voluptatem, ab quasi eaque in, modi tempora id fuga dolorem!
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
					</div>
					<form action="">
						<fieldset>
							<legend>Preview</legend>

							<div className="sapphire_form--group form-submit">
								<ul>
									<li>
										<Link href="/create">
											<a>Cancel</a>
										</Link>
									</li>
									<li>
										<Link href="/landing-pages/sweet-1092342">
											<PreviewButton type="submit">Publish</PreviewButton>
										</Link>
									</li>
								</ul>
							</div>
						</fieldset>
					</form>
				</div>
			</PreviewContent>
		</main>
		<BackstageFooter />
	</div>
);
export default Create;
