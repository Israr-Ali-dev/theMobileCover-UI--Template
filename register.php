<?php include('includes/header.php');?>

<!-- Main Content Begin -->
<main class="main-content" id="MainContent">
    <div class="page-width page-content">
        <div class="grid">
            <div class="grid__item medium-up--one-third medium-up--push-one-third">
                <header class="section-header">
                    <h1 class="section-header__title">Create Account</h1>
                </header>
                <div class="form-vertical">
                    <form method="post" action="#" id="create_customer" accept-charset="UTF-8"><input type="hidden"
                            name="form_type" value="create_customer" /><input type="hidden" name="utf8" value="✓" />
                        <label for="FirstName">First Name</label>
                        <input type="text" name="customer[first_name]" id="FirstName" class="input-full"
                            autocapitalize="words" autofocus>

                        <label for="LastName">Last Name</label>
                        <input type="text" name="customer[last_name]" id="LastName" class="input-full"
                            autocapitalize="words">

                        <label for="Email">Email</label>
                        <input type="email" name="customer[email]" id="Email" class="input-full" autocorrect="off"
                            autocapitalize="off">

                        <label for="CreatePassword">Password</label>
                        <input type="password" name="customer[password]" id="CreatePassword" class="input-full">

                        <p>
                            <input type="submit" value="Create" class="btn btn--full btn--no-animate">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Main Content End -->

<?php include('includes/footer.php');?>