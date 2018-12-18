import ContactHeader from "./ContactHeader";
import Link from "next/link";
import { InnerLoginPage, LoginForm } from "./styles/InnerLogin";
import { SubmitButton } from "./styles/SubmitButton";
import { createGlobalStyle } from "styled-components";

const GlobalContactStyle = createGlobalStyle`
    body {
        background-image: url(/static/images/andre-benz-230282-unsplash.png);
        background-repeat: no-repeat;
        background-position: center top -200px;
        background-color: ${props => props.theme.boseBlack};
        color: ${props => props.theme.boseRed};
        height: 100vh;
    }
`;

const Contact = () => (
	<InnerLoginPage>
		<GlobalContactStyle />
		<ContactHeader heading={"We like to do good work, but sometimes we goof. Please let us know how we're doing."} />
		<main>
			<section>
				<LoginForm action="">
					<fieldset>
						<legend>Contact Us</legend>
						<div className="sapphire_form--group">
							<label htmlFor="email_address">Optional Title</label>{" "}
							<input type="email" id="email_address" />
						</div>
						<div className="sapphire_form--group">
							<label htmlFor="password">Message</label> <textarea rows="12" />
						</div>

						<div className="sapphire_form--group form-submit">
							<Link href="/contact-received">
								<SubmitButton>contact us</SubmitButton>
							</Link>
						</div>
					</fieldset>
				</LoginForm>
			</section>
		</main>
	</InnerLoginPage>
);

export default Contact;
