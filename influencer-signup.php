<?php include('includes/header.php');?>

<!-- Main Content Begin -->
<main class="main-content" id="MainContent">
    <div class="page-width page-content">
        <nav class="breadcrumb" role="navigation" aria-label="breadcrumbs">
            <a href="index.php" title="Back to the frontpage">Home</a>
            <span class="divider" aria-hidden="true">/</span>
            <span>Case Warehouse Influencer Signup</span>
        </nav>
        <div class="grid">
            <div class="grid__item medium-up--three-quarters medium-up--push-one-eighth">
                <header class="section-header">
                    <h1 class="section-header__title">Case Warehouse Influencer Signup</h1>
                </header>
                <div class="rte rte--nomargin">
                    <p><strong>Rep the Case Warehouse brand, protect your iPhone, get exclusive discounts and a hella
                            lot
                            more… Simply fill out the below form and tell us a little bit about yourself.</strong></p>
                    <p> </p>
                    <script src="../../unpkg.com/prefixfree%401.0.0/prefixfree.min.js"></script>
                    <script src="https://wzrd.in/standalone/formdata-polyfill@latest"></script>
                    <script src="https://wzrd.in/standalone/promise-polyfill@latest"></script>
                    <script src="https://wzrd.in/standalone/whatwg-fetch@latest"></script>
                    <style>
                    <!--
                    @import url('https://fonts.googleapis.com/css2?family=Quicksand&amp;display=swap');

                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    .breadcrumbs {

                        display: none;
                    }


                    label {
                        float: left;
                        margin-right: 1em;
                        font-size: 16px;
                        color: #eb5f3b;
                        font-family: 'Quicksand', sans-serif;
                        text-decoration: bold;
                    }

                    input,
                    button,
                    textarea {
                        border: none;
                        font-size: inherit;
                        font-family: inherit;

                        font-family: 'Quicksand', sans-serif;
                        padding: 1rem;
                        width: 100%;
                    }

                    input,
                    textarea {
                        border-bottom-style: solid;
                        border-width: 1px;
                        border-color: #c8dbdb;
                    }


                    input {
                        margin-bottom: 1rem;
                    }

                    input:focus {
                        outline: 2px solid var(--accent);
                        outline-style: none;
                    }

                    #go {
                        color: #fff;
                        cursor: pointer;
                        background-color: #eb5f3b;
                    }



                    .is-hidden {
                        display: none !important;
                    }

                    #go:hover {
                        background-color: #c8dbdb;
                    }

                    @keyframes rotate {
                        100% {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes dash {
                        0% {
                            stroke-dasharray: 1, 200;
                            stroke-dashoffset: 0;
                        }

                        50% {
                            stroke-dasharray: 89, 200;
                            stroke-dashoffset: -35;
                        }

                        100% {
                            stroke-dasharray: 89, 200;
                            stroke-dashoffset: -124;
                        }
                    }

                    .loading {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .loading-spinner {
                        width: 50px;
                        height: 50px;
                    }

                    .loading-spinner svg {
                        position: relative;
                        animation: rotate 2s linear infinite;
                        height: 50px;
                        width: 50px;
                    }

                    .loading-spinner circle {
                        stroke: var(--accent);
                        stroke-dasharray: 1, 200;
                        stroke-dashoffset: 0;
                        stroke-linecap: round;
                        animation: dash 1.5s ease-in-out infinite;
                    }
                    -->
                    </style>
                    <div class="form-container">
                        <form name="submit-to-google-sheet">
                            <label for="name">Your name</label> <input name="name" type="text" required=""> <label
                                for="email">Your email</label> <input name="email" type="email" required=""> <label
                                for="instagram_username">Your Instagram username</label> <input
                                name="instagram_username" type="text" required=""> <label for="follower_count">Your
                                follower count</label> <input name="follower_count" type="text" required=""> <label
                                for="location">Your location</label> <input name="location" type="text" required="">
                            <label for="about">Why would you like to work with Case
                                Warehouse?</label> <textarea name="about" required=""></textarea> <br> <br> <button
                                id="go" type="submit">Send</button>
                        </form>
                        <div class="loading js-loading is-hidden">
                            <div class="loading-spinner"><svg>
                                    <circle cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10">
                                    </circle>
                                </svg></div>
                        </div>
                        <p class="js-success-message is-hidden">Thank you-your details have been submitted
                            successfully!<br>We'll now have a good look over your content and if we feel you're a good
                            fit, will
                            be in touch with in the next couple of weeks.</p>
                        <p class="js-error-message is-hidden">Oops! There seems to have been an error with your
                            submission!
                            <br> Don't worry, there could be an issue at our end. <br>Please get in touch at
                            hello@casewarehouse.com and we'll look into it!
                        </p>
                    </div>
                    <script>
                    // <![CDATA[
                    const scriptURL =
                        'https://script.google.com/macros/s/AKfycbxGw9QhWIe5iaCyigHloWwUkjz-vCyUp2z12O1DLM156yz6-z6L/exec'
                    const form = document.forms['submit-to-google-sheet']
                    const loading = document.querySelector('.js-loading')
                    const successMessage = document.querySelector('.js-success-message')
                    const errorMessage = document.querySelector('.js-error-message')

                    form.addEventListener('submit', e => {
                        e.preventDefault()
                        showLoadingIndicator()
                        fetch(scriptURL, {
                                method: 'POST',
                                body: new FormData(form)
                            })
                            .then(response => showSuccessMessage(response))
                            .catch(error => showErrorMessage(error))
                    })

                    function showLoadingIndicator() {
                        form.classList.add('is-hidden')
                        loading.classList.remove('is-hidden')
                    }

                    function showSuccessMessage(response) {
                        console.log('Success!', response)
                        setTimeout(() => {
                            successMessage.classList.remove('is-hidden')
                            loading.classList.add('is-hidden')
                        }, 500)
                    }

                    function showErrorMessage(error) {
                        console.error('Error!', error.message)
                        setTimeout(() => {
                            errorMessage.classList.remove('is-hidden')
                            loading.classList.add('is-hidden')
                        }, 500)
                    }
                    // ]]>
                    </script>
                </div>

            </div>
        </div>

    </div>

</main>

<!-- Main Content Begin -->
<?php include('includes/footer.php');?>