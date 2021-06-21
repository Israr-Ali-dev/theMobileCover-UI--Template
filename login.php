<?php include('includes/header.php');?>

<!-- Main Content Begin -->
<main class="main-content" id="MainContent">
    <div class="page-width page-content">
        <div class="grid">
            <div class="grid__item medium-up--one-third medium-up--push-one-third">
                <header class="section-header">
                    <h1 class="section-header__title">Login</h1>
                </header>
                <div class="note note--success hide" id="ResetSuccess">
                    We&#39;ve sent you an email with a link to update your password.
                </div>
                <div id="CustomerLoginForm" class="form-vertical">
                    <form method="post" action="#" id="customer_login" accept-charset="UTF-8"><input type="hidden"
                            name="form_type" value="customer_login" /><input type="hidden" name="utf8" value="✓" />
                        <label for="CustomerEmail">Email</label>
                        <input type="email" name="customer[email]" id="CustomerEmail" class="input-full"
                            autocorrect="off" autocapitalize="off" autofocus>
                        <div class="grid">
                            <div class="grid__item one-half">
                                <label for="CustomerPassword">Password</label>
                            </div>
                            <div class="grid__item one-half text-right">
                                <small class="label-info">
                                    <a href="#recover" id="RecoverPassword" class="js-no-transition">
                                        Forgot?
                                    </a>
                                </small>
                            </div>
                        </div>
                        <input type="password" value="" name="customer[password]" id="CustomerPassword"
                            class="input-full">
                        <p>
                            <input type="submit" class="btn btn--full btn--no-animate" value="Sign In">
                        </p>
                        <p><a href="register.php" id="customer_register_link">Create account</a></p>
                    </form>
                </div>
                <div id="RecoverPasswordForm" class="hide">
                    <h2>Reset your password</h2>
                    <p>We will send you an email to reset your password.</p>
                    <div class="form-vertical">
                        <form method="post" action="#" accept-charset="UTF-8"><input type="hidden" name="form_type"
                                value="recover_customer_password" /><input type="hidden" name="utf8" value="✓" />

                            <label for="RecoverEmail">Email</label>
                            <input type="email" value="" name="email" id="RecoverEmail" class="input-full"
                                autocorrect="off" autocapitalize="off">
                            <p>
                                <input type="submit" class="btn" value="Submit">
                            </p>
                            <button type="button" id="HideRecoverPasswordLink">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Main Content End -->

<?php include('includes/footer.php')?>