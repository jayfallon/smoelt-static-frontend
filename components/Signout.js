import LoginHeader from "./LoginHeader";
import Link from "next/link";
import { InnerLoginPage, LoginForm } from "./styles/InnerLogin";
import GlobalLoginStyle from "./styles/GlobalLoginStyle";
import { SubmitButton } from "./styles/SubmitButton";

const Signup = () => (
	<InnerLoginPage>
		<GlobalLoginStyle />
		<LoginHeader heading={"You've been signed out. Don't be a stranger!"} />
		<main>
			<section>
				<LoginForm action="">
					<fieldset>
						<legend>Sign In</legend>
						<div className="sapphire_form--group">
							<label htmlFor="email_address">Email</label> <input type="email" id="email_address" />
						</div>
						<div className="sapphire_form--group">
							<label htmlFor="password">Password</label> <input type="password" id="last_name" />
						</div>
						<div className="sapphire_form--group password-forgot">
							<Link href="/reset">
								<a>Forgot your password?</a>
							</Link>
						</div>
						<div className="sapphire_form--group form-submit">
							<Link href="/dashboard">
								<SubmitButton>log back in</SubmitButton>
							</Link>
						</div>
					</fieldset>
				</LoginForm>
			</section>
		</main>
	</InnerLoginPage>
);

export default Signup;
