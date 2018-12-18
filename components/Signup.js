import Link from "next/link";
import LoginHeader from "./LoginHeader";
import { InnerLoginPage, LoginForm } from "./styles/InnerLogin";
import GlobalLoginStyle from "./styles/GlobalLoginStyle";
import { SubmitButton } from "./styles/SubmitButton";

const Signup = () => (
	<InnerLoginPage>
		<GlobalLoginStyle />
		<LoginHeader
			heading={"Be the first to join Landing Pages - a brand new customer outreach experience from Smoelt & Co."}
		/>
		<main>
			<section>
				<LoginForm action="">
					<fieldset>
						<legend>Sign Up</legend>
						<div className="sapphire_form--group">
							<label htmlFor="first_name">Name</label> <input type="text" id="first_name" />
						</div>
						<div className="sapphire_form--group">
							<label htmlFor="email_address">Email</label> <input type="email" id="email_address" />
						</div>
						<div className="sapphire_form--group">
							<label htmlFor="password">Password</label> <input type="password" id="password" />
						</div>
						<div className="sapphire_form--group">
							<label htmlFor="password">Password Confirm</label>{" "}
							<input type="password" id="password-confirm" />
						</div>

						<div className="sapphire_form--group form-submit">
							<Link href="/dashboard">
								<SubmitButton type="submit">create account</SubmitButton>
							</Link>
						</div>
						<div className="sapphire_form--group form-gate">
							<span>Already have an account?</span>{" "}
							<Link href="/signin">
								<a>Log In</a>
							</Link>
						</div>
					</fieldset>
				</LoginForm>
			</section>
		</main>
	</InnerLoginPage>
);

export default Signup;
