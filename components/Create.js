import Link from "next/link";
import styled from "styled-components";
import Header from "./Header";
import BackstageFooter from "./BackstageFooter";
import CreateStyles from "./styles/CreateStyles";
import { PreviewButton } from "./styles/SubmitButton";

const CreateContent = styled.section`
	background-color: #f8f8f8;
	padding: 8rem 0 16rem;
	.create_inner {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: 41.6rem;
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
`;

const Create = props => (
	<div>
		<CreateStyles />
		<Header />
		<main>
			<CreateContent>
				<div className="create_inner">
					<h3>Create</h3>
					<form action="">
						<fieldset>
							<legend>Create</legend>
							<div className="sapphire_form--group">
								<label htmlFor="ga-code">Google Analytics Code</label>{" "}
								<input type="text" id="ga-code" />
							</div>
							<div className="sapphire_form--group">
								<label htmlFor="title">Image</label> <input type="file" id="image" />
							</div>
							<div className="sapphire_form--group">
								<label htmlFor="title">Title</label> <input type="text" id="title" />
							</div>
							<div className="sapphire_form--group">
								<label htmlFor="email_address">Description</label> <textarea rows="5" />
							</div>
							<div className="sapphire_form--group">
								<label htmlFor="discount">
									Discount Code <span>(if any)</span>
								</label>
								<input type="text" id="discount" />
							</div>
							<div className="sapphire_form--group">
								<label htmlFor="discount">CTA Title</label>
								<input type="text" id="discount" />
							</div>
							<div className="sapphire_form--group">
								<label htmlFor="discount">
									<input type="checkbox" id="discount" />
									Request Email Address?
								</label>
							</div>

							<div className="sapphire_form--group form-submit">
								<Link href="/preview">
									<PreviewButton type="submit">preview</PreviewButton>
								</Link>
							</div>
						</fieldset>
					</form>
				</div>
			</CreateContent>
		</main>
		<BackstageFooter />
	</div>
);
export default Create;
