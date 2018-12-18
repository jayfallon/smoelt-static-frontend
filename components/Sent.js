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
						<legend>Reset Sent</legend>
						
						<div className="sapphire_form--group reset-message">
							An email with password reset instructions has been sent to forgotten@gmail.com.
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
