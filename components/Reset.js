import LoginHeader from "./LoginHeader";
import Link from "next/link";
import { InnerLoginPage, LoginForm } from "./styles/InnerLogin";
import GlobalLoginStyle from "./styles/GlobalLoginStyle";
import { SubmitButton } from "./styles/SubmitButton";

const Signup = () => (
	<InnerLoginPage>
		<GlobalLoginStyle />
		<LoginHeader />
		<main>
			<section>
				<LoginForm action="">
					<fieldset>
						<legend>Password Reset</legend>
						<div className="sapphire_form--group">
							<label htmlFor="email_address">Email</label>
							<input type="email" id="email_address" placeholder="example@example.com" />
						</div>
						<div className="sapphire_form--group reset-message">
							Enter your email address and Bose will send you an instructional email on how to reset your
							password.
						</div>
						<div className="sapphire_form--group form-submit">
							<Link href="/sent">
								<SubmitButton type="submit">send email</SubmitButton>
							</Link>
						</div>
						<div className="sapphire_form--group form-gate">
							<Link href="/signin">
								<a>Back to Log In</a>
							</Link>
						</div>
					</fieldset>
				</LoginForm>
			</section>
		</main>
	</InnerLoginPage>
);

export default Signup;
