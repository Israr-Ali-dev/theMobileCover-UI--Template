<!DOCTYPE html>
<html lang="en" dir="ltr"
    class="no-js windows chrome desktop page--no-banner page--logo-main page--show page--show card-fields">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0">
    <meta name="referrer" content="origin">

    <title>Checkout</title>

    <link rel="stylesheet" media="all" href="assets/css/check.css" />
    <script src="assets/js/check.js">
    </script>


</head>

<body>

    <!-- Header Begin -->
    <header class="banner" data-header role="banner">
        <div class="wrap">

            <a class="logo logo--left" href="index.php"><img alt="Case Warehouse"
                    class="logo__image logo__image--medium" src="assets/img/TMC/clogo.png" /></a>
        </div>
    </header>
    <!-- Header End -->


    <!-- Side Order Detail Begin -->
    <aside>
        <button class="order-summary-toggle order-summary-toggle--show shown-if-js" aria-expanded="false"
            aria-controls="order-summary" data-drawer-toggle="[data-order-summary]">
            <span class="wrap">
                <span class="order-summary-toggle__inner">
                    <span class="order-summary-toggle__icon-wrapper">
                        <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg"
                            class="order-summary-toggle__icon">
                            <path
                                d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z" />
                        </svg>
                    </span>
                    <span class="order-summary-toggle__text order-summary-toggle__text--show">
                        <span>Show order summary</span>
                        <svg width="11" height="6" xmlns="http://www.w3.org/2000/svg"
                            class="order-summary-toggle__dropdown" fill="#000">
                            <path
                                d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z" />
                        </svg>
                    </span>
                    <span class="order-summary-toggle__text order-summary-toggle__text--hide">
                        <span>Hide order summary</span>
                        <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"
                            class="order-summary-toggle__dropdown" fill="#000">
                            <path
                                d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z" />
                        </svg>
                    </span>
                    <span class="order-summary-toggle__total-recap total-recap"
                        data-order-summary-section="toggle-total-recap">
                        <span class="total-recap__final-price skeleton-while-loading"
                            data-checkout-payment-due-target="48100">$481.00 AUD</span>
                    </span>
                </span>
            </span>
        </button>
    </aside>
    <!-- Side Order Detail End -->


    <div class="content" data-content>
        <div class="wrap">
            <div class="main">
                <header class="main__header" role="banner">

                    <a class="logo logo--left" href="#"><img alt="Case Warehouse"
                            class="logo__image logo__image--medium" src="assets/img/TMC/clogo.png" /></a>

                    <h1 class="visually-hidden">
                        Payment
                    </h1>
                    <!-- Checkout Menu Begin -->
                    <nav aria-label="Breadcrumb">
                        <ul class="breadcrumb " role="list">
                            <li class="breadcrumb__item breadcrumb__item--completed">
                                <a class="breadcrumb__link" href="cart.php">Cart</a>
                                <svg class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                                    aria-hidden="true" focusable="false">
                                    <use xlink:href="#chevron-right" />
                                </svg>
                            </li>

                            <li class="breadcrumb__item breadcrumb__item--completed">
                                <a class="breadcrumb__link" href="information.php">Information</a>
                                <svg class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                                    aria-hidden="true" focusable="false">
                                    <use xlink:href="#chevron-right" />
                                </svg>
                            </li>
                            <li class="breadcrumb__item breadcrumb__item--completed">
                                <a class="breadcrumb__link" href="shipping.php">Shipping</a>
                                <svg class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                                    aria-hidden="true" focusable="false">
                                    <use xlink:href="#chevron-right" />
                                </svg>
                            </li>
                            <li class="breadcrumb__item breadcrumb__item--current" aria-current="step">
                                <span class="breadcrumb__text">Payment</span>
                            </li>
                        </ul>
                    </nav>
                    <!-- Checkout Menu End -->
                    <div class="shown-if-js" data-alternative-payments>
                    </div>

                </header>


                <main class="main__content" role="main">

                    <div class="step" data-step="payment_method" data-last-step="true">

                        <div class="step__sections">

                            <div class="section">
                                <div class="content-box">
                                    <div role="table" class="content-box__row content-box__row--tight-spacing-vertical">
                                        <div role="row" class="review-block">
                                            <div class="review-block__inner">
                                                <div role="rowheader" class="review-block__label">
                                                    Contact
                                                </div>
                                                <div role="cell" class="review-block__content">
                                                    <bdo dir="ltr">nujaj@mailinator.com</bdo>
                                                </div>
                                            </div>
                                            <div role="cell" class="review-block__link">
                                                <a class="link--small"
                                                    href="/24857096/checkouts/6388e169f46c57c0ffc96ac01919ca72?step=contact_information">
                                                    <span aria-hidden="true">Change</span>
                                                    <span class="visually-hidden">Change contact information</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div role="row" class="review-block">
                                            <div class="review-block__inner">
                                                <div role="rowheader" class="review-block__label">
                                                    Ship to
                                                </div>
                                                <div role="cell" class="review-block__content">
                                                    <address class="address address--tight">
                                                        Schmidt and Mcneil Associates, 277 North White Old Lane, Et
                                                        occaecat ut magna, 50888 Culpa quaerat incidu , Cyprus
                                                        <address>
                                                </div>
                                            </div>
                                            <div role="cell" class="review-block__link">
                                                <a class="link--small"
                                                    href="/24857096/checkouts/6388e169f46c57c0ffc96ac01919ca72?step=contact_information">
                                                    <span aria-hidden="true">Change</span>
                                                    <span class="visually-hidden">Change shipping address</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div role="row" class="review-block">
                                            <div class="review-block__inner">
                                                <div role="rowheader" class="review-block__label">
                                                    Method
                                                </div>
                                                <div role="cell" class="review-block__content"
                                                    data-review-section="shipping-cost">
                                                    Standard Shipping (6-18 Business Days)
                                                    ·
                                                    <strong class="emphasis">
                                                        <span class="skeleton-while-loading--inline">Free</span>
                                                    </strong>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div class="section section--reductions hidden-on-desktop">
                                <div class="section__header">
                                    <h2 class="section__title">Gift card or discount code</h2>
                                </div>

                                <div class="section__content">
                                    <div data-reduction-form>
                                        <form class="edit_checkout" action="" accept-charset="UTF-8" method="post">
                                            <input type="hidden" name="_method" value="patch" /><input type="hidden"
                                                name="authenticity_token"
                                                value="9xynMbq+wnuF07w8vtNtnd/o/bHoi9tu8mYaMAfvcW+sIOEC5otd7imPeortDsVNjsXbCNO4XDIudwQe0r3HxA==" />
                                            <input type="hidden" name="step" value="payment_method" />
                                        </form>
                                        <form class="edit_checkout" action="" accept-charset="UTF-8" method="post">
                                            <input type="hidden" name="_method" value="patch" /><input type="hidden"
                                                name="authenticity_token" value="" />
                                            <input type="hidden" name="step" value="payment_method" />
                                            <div class="fieldset">
                                                <div class="field ">
                                                    <label class="field__label"
                                                        for="checkout_reduction_code_mobile">Gift card or discount
                                                        code</label>
                                                    <div class="field__input-btn-wrapper">
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="Gift card or discount code"
                                                                class="field__input" id="checkout_reduction_code_mobile"
                                                                data-discount-field="true" autocomplete="off"
                                                                aria-required="true" size="30" type="text" value=" "
                                                                name="checkout[reduction_code]" />
                                                        </div>

                                                        <button name="button" type="submit"
                                                            class="field__input-btn btn btn--disabled"
                                                            aria-busy="false">
                                                            <span class="btn__content visually-hidden-on-mobile"
                                                                aria-hidden="true">
                                                                Apply
                                                            </span>
                                                            <span class="visually-hidden">
                                                                Apply Discount Code
                                                            </span>
                                                            <svg class="icon-svg icon-svg--size-16 btn__icon shown-on-mobile"
                                                                aria-hidden="true" focusable="false">
                                                                <use xlink:href="#arrow" />
                                                            </svg>
                                                            <svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                                                                aria-hidden="true" focusable="false">
                                                                <use xlink:href="#spinner-button" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>

                            <form class="edit_checkout" data-payment-form="" action="" accept-charset="UTF-8" method="">
                                <input type="hidden" name="_method" value="patch" /><input type="hidden"
                                    name="authenticity_token" value="" />
                                <input type="hidden" name="previous_step" id="previous_step" value="payment_method" />
                                <input type="hidden" name="step" />
                                <input type="hidden" name="s" id="s" />


                                <div class="section section--payment-method" data-payment-method>
                                    <div class="section__header">
                                        <h2 class="section__title" id="main-header" tabindex="-1">
                                            Payment
                                        </h2>
                                        <p class="section__text">
                                            All transactions are secure and encrypted.
                                        </p>
                                    </div>

                                    <div class="section__content">


                                        <div data-payment-subform="required">
                                            <fieldset class="content-box">
                                                <legend class="visually-hidden">Choose a payment method</legend>
                                                <div class="radio-wrapper content-box__row " data-gateway-group="direct"
                                                    data-gateway-name="credit_card" data-select-gateway="5084217382">
                                                    <div class="radio__input">
                                                        <input class="input-radio"
                                                            id="checkout_payment_gateway_5084217382"
                                                            data-backup="payment_gateway_5084217382"
                                                            aria-describedby="payment_gateway_5084217382_description"
                                                            aria-controls="payment-gateway-subfields-5084217382"
                                                            type="radio" value="5084217382" checked="checked"
                                                            name="checkout[payment_gateway]" />
                                                    </div>

                                                    <div class="radio__label payment-method-wrapper ">
                                                        <label for="checkout_payment_gateway_5084217382"
                                                            class="radio__label__primary content-box__emphasis">
                                                            Credit card
                                                        </label>
                                                        <span class="radio__label__accessory">
                                                            <span class="visually-hidden">
                                                                Pay with:
                                                            </span>

                                                            <ul role="list" data-brand-icons-for-gateway="5084217382">
                                                                <li class="payment-icon payment-icon--visa"
                                                                    data-payment-icon="visa" aria-current="false">
                                                                    <span class="visually-hidden">
                                                                        Visa,
                                                                    </span>
                                                                </li>
                                                                <li class="payment-icon payment-icon--maestro"
                                                                    data-payment-icon="maestro" aria-current="false">
                                                                    <span class="visually-hidden">
                                                                        Maestro,
                                                                    </span>
                                                                </li>
                                                                <li class="payment-icon payment-icon--master"
                                                                    data-payment-icon="master" aria-current="false">
                                                                    <span class="visually-hidden">
                                                                        Mastercard,
                                                                    </span>
                                                                </li>
                                                                <li class="payment-icon payment-icon--american-express"
                                                                    data-payment-icon="american-express"
                                                                    aria-current="false">
                                                                    <span class="visually-hidden">
                                                                        American Express,
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </div>

                                                </div>

                                                <div class="card-fields-styling-options"></div>
                                                <div id="payment-gateway-subfields"
                                                    data-subfields-for-gateway="5084217382"
                                                    class="radio-wrapper content-box__row content-box__row--secondary card-fields-container">

                                                    <div class="fieldset">
                                                        <input class="credit-card" type="text"
                                                            placeholder="Card Number" />
                                                        <input class="credit-card w-50-l" type=" text"
                                                            placeholder="Name on card" />
                                                        <input class="credit-card w-50-r" type="text"
                                                            placeholder="Expiratin date (MM / YY)" />
                                                        <input class="credit-card" type="text"
                                                            placeholder="Security code" />
                                                    </div>
                                                </div>

                                                <div class="radio-wrapper content-box__row " data-select-gateway="9">
                                                    <div class="radio__input">
                                                        <input class="input-radio" id="checkout_payment_gateway"
                                                            data-backup="payment_gateway_9"
                                                            aria-describedby="payment_gateway_9_description"
                                                            aria-controls="payment-gateway-subfields-9" type="radio"
                                                            value="9" name="checkout[payment_gateway]" />
                                                    </div>

                                                    <div class="radio__label  ">
                                                        <label for="checkout_payment_gateway_9"
                                                            class="radio__label__primary content-box__emphasis">
                                                            <img alt="PayPal" class="offsite-payment-gateway-logo"
                                                                src="assets/img/payment-icons/paypal.png" />
                                                            <span class="visually-hidden">
                                                                PayPal
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>

                                                <div class="radio-wrapper content-box__row content-box__row--secondary"
                                                    data-subfields-for-gateway="9" id="payment-gateway-subfields-9">
                                                    <div class="blank-slate">
                                                        <i class="blank-slate__icon icon icon--offsite"></i>
                                                        <p class="shown-if-js">After clicking “Complete order”, you will
                                                            be redirected to PayPal to complete your purchase securely.
                                                        </p>
                                                        <p class="hidden-if-js">After clicking “Continue to payment”,
                                                            you will be redirected to PayPal to complete your purchase
                                                            securely.</p>
                                                        <p>PayPal total <strong class="emphasis">£265.72 GBP</strong>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="radio-wrapper content-box__row " data-select-gateway="8">
                                                    <div class="radio__input">
                                                        <input class="input-radio" id="checkout_payment_gateway"
                                                            data-backup="payment_gateway_8"
                                                            aria-describedby="payment_gateway_8_description"
                                                            aria-controls="payment-gateway-subfields-8" type="radio"
                                                            value="8" name="checkout[payment_gateway]" />
                                                    </div>

                                                    <div class="radio__label  ">
                                                        <label for="checkout_payment_gateway_8"
                                                            class="radio__label__primary content-box__emphasis">
                                                            <img alt="Amazon Pay" class="offsite-payment-gateway-logo"
                                                                src="assets/img/payment-icons/amazon.png" />
                                                            <span class="visually-hidden">
                                                                Amazon Pay
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>

                                                <div class="radio-wrapper content-box__row content-box__row--secondary"
                                                    data-subfields-for-gateway="8" id="payment-gateway-subfields-8">
                                                    <div class="blank-slate">
                                                        <i class="blank-slate__icon icon icon--offsite"></i>
                                                        <p class="shown-if-js">After clicking “Complete order”, you will
                                                            be redirected to PayPal to complete your purchase securely.
                                                        </p>
                                                        <p class="hidden-if-js">After clicking “Continue to payment”,
                                                            you will be redirected to PayPal to complete your purchase
                                                            securely.</p>
                                                        <p>PayPal total <strong class="emphasis">£265.72 GBP</strong>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="radio-wrapper content-box__row " data-select-gateway="7">
                                                    <div class="radio__input">
                                                        <input class="input-radio" id="checkout_payment_gateway"
                                                            data-backup="payment_gateway_7"
                                                            aria-describedby="payment_gateway_7_description"
                                                            aria-controls="payment-gateway-subfields-7" type="radio"
                                                            value="7" name="checkout[payment_gateway]" />
                                                    </div>

                                                    <div class="radio__label  ">
                                                        <label for="checkout_payment_gateway_7"
                                                            class="radio__label__primary content-box__emphasis">
                                                            <img alt="Apple Pay" class="offsite-payment-gateway-logo"
                                                                src="assets/img/payment-icons/apple.png" />
                                                            <span class="visually-hidden">
                                                                Apple Pay
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>

                                                <div class="radio-wrapper content-box__row content-box__row--secondary"
                                                    data-subfields-for-gateway="7" id="payment-gateway-subfields-7">
                                                    <div class="blank-slate">
                                                        <i class="blank-slate__icon icon icon--offsite"></i>
                                                        <p class="shown-if-js">After clicking “Complete order”, you will
                                                            be redirected to PayPal to complete your purchase securely.
                                                        </p>
                                                        <p class="hidden-if-js">After clicking “Continue to payment”,
                                                            you will be redirected to PayPal to complete your purchase
                                                            securely.</p>
                                                        <p>PayPal total <strong class="emphasis">£265.72 GBP</strong>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="radio-wrapper content-box__row "
                                                    data-gateway-group="offsite" data-gateway-name="offsite"
                                                    data-select-gateway="38620921909">
                                                    <div class="radio__input">
                                                        <input class="input-radio"
                                                            id="checkout_payment_gateway_38620921909"
                                                            data-backup="payment_gateway_38620921909"
                                                            aria-describedby="payment_gateway_38620921909_description"
                                                            aria-controls="payment-gateway-subfields-38620921909"
                                                            type="radio" value="38620921909"
                                                            name="checkout[payment_gateway]" />
                                                    </div>
                                                    <div class="radio__label  ">
                                                        <label for="checkout_payment_gateway_38620921909"
                                                            class="radio__label__primary content-box__emphasis">
                                                            Buy now, pay later with Klarna
                                                        </label>
                                                        <span class="radio__label__accessory">
                                                            <span class="visually-hidden">
                                                                Pay with:
                                                            </span>

                                                            <ul role="list" data-brand-icons-for-gateway="38620921909">
                                                                <li class="payment-icon payment-icon--klarna"
                                                                    data-payment-icon="klarna" aria-current="false">

                                                                    <span class="visually-hidden">
                                                                        ,
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </div>
                                                    <div id="payment_gateway_38620921909_description"
                                                        class="visually-hidden" aria-live="polite"
                                                        data-detected="Detected card brand: {brand}">
                                                    </div>
                                                </div>

                                                <div class="radio-wrapper content-box__row content-box__row--secondary"
                                                    data-subfields-for-gateway="38620921909"
                                                    id="payment-gateway-subfields-38620921909">
                                                    <div class="blank-slate">
                                                        <i class="blank-slate__icon icon icon--offsite"></i>
                                                        <p class="shown-if-js">After clicking “Complete order”, you will
                                                            be redirected to Buy now, pay later with Klarna to complete
                                                            your purchase securely.</p>
                                                        <p class="hidden-if-js">After clicking “Continue to payment”,
                                                            you will be redirected to Buy now, pay later with Klarna to
                                                            complete your purchase securely.</p>
                                                        <p>Buy now, pay later with Klarna total <strong
                                                                class="emphasis">£265.72 GBP</strong></p>
                                                    </div>
                                                </div>



                                            </fieldset>
                                        </div>

                                        <div data-payment-subform="gift_cards" class="hidden">
                                            <input value="free" disabled="disabled" size="30" type="hidden"
                                                name="checkout[payment_gateway]" />
                                            <div class="content-box blank-slate">
                                                <div class="content-box__row">
                                                    <i class="blank-slate__icon icon icon--free-tag"></i>
                                                    <p>Your order is covered by your gift cards.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-payment-subform="free" class="hidden"></div>
                                    </div>
                                </div>

                                <div class="section section--billing-address" data-billing-address>
                                    <div class="section__header">
                                        <h2 class="section__title">Billing address</h2>
                                        <p class="section__text">
                                            Select the address that matches your card or payment method.
                                        </p>
                                    </div>

                                    <div class="section__content">
                                        <fieldset class="content-box">
                                            <legend class="visually-hidden">Choose a billing address</legend>

                                            <div class="radio-wrapper content-box__row" data-same-billing-address>
                                                <div class="radio__input">
                                                    <input class="input-radio"
                                                        data-backup="different_billing_address_false" type="radio"
                                                        value="false" checked="checked"
                                                        name="checkout[different_billing_address]"
                                                        id="checkout_different_billing_address_false" />
                                                </div>

                                                <label class="radio__label content-box__emphasis"
                                                    for="checkout_different_billing_address_false">
                                                    Same as shipping address
                                                </label>
                                            </div>

                                            <div class="radio-wrapper content-box__row" data-different-billing-address>
                                                <div class="radio__input">
                                                    <input class="input-radio"
                                                        data-backup="different_billing_address_true"
                                                        aria-controls="section--billing-address__different" type="radio"
                                                        value="true" name="checkout[different_billing_address]"
                                                        id="checkout_different_billing_address_true" />
                                                </div>
                                                <label class="radio__label content-box__emphasis"
                                                    for="checkout_different_billing_address_true">
                                                    Use a different billing address
                                                </label>
                                            </div>

                                            <div class="radio-group__row content-box__row content-box__row--secondary"
                                                id="section--billing-address__different">
                                                <div class="fieldset">

                                                    <div class="address-fields" data-address-fields>
                                                        <input class="visually-hidden" autocomplete="billing given-name"
                                                            tabindex="-1" aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="first_name" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][first_name]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing family-name" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="last_name" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][last_name]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing organization" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="company" data-honeypot="true"
                                                            size="30" type="text"
                                                            name="checkout[billing_address][company]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing address-line1" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="address1" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][address1]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing address-line2" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="address2" data-honeypot="true"
                                                            size="30" type="text"
                                                            name="checkout[billing_address][address2]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing address-level2" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="city" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][city]" />
                                                        <input class="visually-hidden" autocomplete="billing country"
                                                            tabindex="-1" aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="country" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][country]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing address-level1" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="province" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][province]" />
                                                        <input class="visually-hidden"
                                                            autocomplete="billing postal-code" tabindex="-1"
                                                            aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="zip" data-honeypot="true"
                                                            aria-required="true" size="30" type="text"
                                                            name="checkout[billing_address][zip]" />
                                                        <input class="visually-hidden" autocomplete="billing tel"
                                                            tabindex="-1" aria-hidden="true" aria-label="no-label"
                                                            data-autocomplete-field="phone" data-honeypot="true"
                                                            size="30" type="text"
                                                            name="checkout[billing_address][phone]" />



                                                        <div class="field--half field field--required"
                                                            data-address-field="first_name">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_first_name">First
                                                                name</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="First name"
                                                                    autocomplete="billing given-name" autocorrect="off"
                                                                    data-backup="first_name" class="field__input"
                                                                    aria-required="true" size="30" type="text"
                                                                    name="checkout[billing_address][first_name]"
                                                                    id="checkout_billing_address_first_name" />
                                                            </div>
                                                        </div>
                                                        <div class="field--half field field--required"
                                                            data-address-field="last_name">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_last_name">Last
                                                                name</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="Last name"
                                                                    autocomplete="billing family-name" autocorrect="off"
                                                                    data-backup="last_name" class="field__input"
                                                                    aria-required="true" size="30" type="text"
                                                                    name="checkout[billing_address][last_name]"
                                                                    id="checkout_billing_address_last_name" />
                                                            </div>
                                                        </div>
                                                        <div data-address-field="company"
                                                            data-autocomplete-field-container="true"
                                                            class="field field--optional">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_company">Company
                                                                (optional)</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="Company (optional)"
                                                                    autocomplete="billing organization"
                                                                    autocorrect="off" data-backup="company"
                                                                    class="field__input" size="30" type="text"
                                                                    name="checkout[billing_address][company]"
                                                                    id="checkout_billing_address_company" />
                                                            </div>
                                                        </div>
                                                        <div data-address-field="address1"
                                                            data-autocomplete-field-container="true"
                                                            class="field field--required">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_address1">Address</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="Address"
                                                                    autocomplete="billing address-line1"
                                                                    autocorrect="off" role="combobox"
                                                                    aria-autocomplete="list" aria-expanded="false"
                                                                    aria-required="true" data-backup="address1"
                                                                    data-autocomplete-trigger="true"
                                                                    data-autocomplete-title="Suggestions"
                                                                    data-autocomplete-single-item="1 item available"
                                                                    data-autocomplete-multi-item="{{number}} items available"
                                                                    data-autocomplete-item-selection="{{number}} of {{total}}"
                                                                    data-autocomplete-close="Close suggestions"
                                                                    class="field__input" size="30" type="text"
                                                                    name="checkout[billing_address][address1]"
                                                                    id="checkout_billing_address_address1" />

                                                                <p class="field__additional-info visually-hidden"
                                                                    data-address-civic-number-warning>
                                                                    <svg class="icon-svg icon-svg--size-16 field__message__icon"
                                                                        aria-hidden="true" focusable="false">
                                                                        <use xlink:href="#info" />
                                                                    </svg>
                                                                    Add a house number if you have one
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div data-address-field="address2"
                                                            data-autocomplete-field-container="true"
                                                            class="field field--optional">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_address2">Apartment,
                                                                suite, etc. (optional)</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="Apartment, suite, etc. (optional)"
                                                                    autocomplete="billing address-line2"
                                                                    autocorrect="off" data-backup="address2"
                                                                    class="field__input" size="30" type="text"
                                                                    name="checkout[billing_address][address2]"
                                                                    id="checkout_billing_address_address2" />
                                                            </div>
                                                        </div>
                                                        <div data-address-field="city"
                                                            data-autocomplete-field-container="true"
                                                            class="field field--required">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_city">City</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="City"
                                                                    autocomplete="billing address-level2"
                                                                    autocorrect="off" data-backup="city"
                                                                    class="field__input" aria-required="true" size="30"
                                                                    type="text" name="checkout[billing_address][city]"
                                                                    id="checkout_billing_address_city" />
                                                            </div>
                                                        </div>
                                                        <div class="field--third field field--required"
                                                            data-address-field="country"
                                                            data-autocomplete-field-container="true">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_country">Country/Region</label>
                                                            <div
                                                                class="field__input-wrapper field__input-wrapper--select">
                                                                <select size="1" autocomplete="billing country"
                                                                    data-backup="country"
                                                                    class="field__input field__input--select"
                                                                    aria-required="true"
                                                                    name="checkout[billing_address][country]"
                                                                    id="checkout_billing_address_country">
                                                                    <option data-code="GB" value="United Kingdom">United
                                                                        Kingdom</option>
                                                                    <option data-code="PK" value="Ireland">Pakistan
                                                                    </option>
                                                                    <option data-code="US" value="United States">United
                                                                        States</option>
                                                                    <option data-code="TK" value="Germany">Turkey
                                                                    </option>
                                                                    <option data-code="AF" value="Afghanistan">
                                                                        Afghanistan</option>
                                                                    <option data-code="AL" value="Albania">Albania
                                                                    </option>
                                                                    <option data-code="DZ" value="Algeria">Algeria
                                                                    </option>
                                                                    <option data-code="AD" value="Andorra">Andorra
                                                                    </option>

                                                                </select>
                                                                <div class="field__caret">
                                                                    <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                                                        role="presentation" aria-hidden="true"
                                                                        focusable="false">
                                                                        <use xlink:href="#caret-down" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="field--third field field--required"
                                                            data-address-field="province"
                                                            data-autocomplete-field-container="true">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_province">Region</label>
                                                            <div
                                                                class="field__input-wrapper field__input-wrapper--select">
                                                                <input placeholder="Region"
                                                                    autocomplete="billing address-level1"
                                                                    autocorrect="off" data-backup="province"
                                                                    class="field__input" aria-required="true"
                                                                    type="text"
                                                                    name="checkout[billing_address][province]"
                                                                    id="checkout_billing_address_province" />
                                                                <div class="field__caret shown-if-js">
                                                                    <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                                                        role="presentation" aria-hidden="true"
                                                                        focusable="false">
                                                                        <use xlink:href="#caret-down" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="field--third field field--required"
                                                            data-address-field="zip"
                                                            data-autocomplete-field-container="true">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_zip">Postal code</label>
                                                            <div class="field__input-wrapper">
                                                                <input placeholder="Postal code"
                                                                    autocomplete="billing postal-code" autocorrect="off"
                                                                    data-backup="zip" data-autocomplete-trigger="true"
                                                                    data-autocomplete-title="Suggestions"
                                                                    data-autocomplete-single-item="1 item available"
                                                                    data-autocomplete-multi-item="{{number}} items available"
                                                                    data-autocomplete-item-selection="{{number}} of {{total}}"
                                                                    data-autocomplete-close="Close suggestions"
                                                                    class="field__input field__input--zip"
                                                                    aria-required="true" size="30" type="text"
                                                                    name="checkout[billing_address][zip]"
                                                                    id="checkout_billing_address_zip" />
                                                            </div>
                                                        </div>
                                                        <div data-address-field="phone" class="field field--optional">
                                                            <label class="field__label"
                                                                for="checkout_billing_address_phone">Phone
                                                                (optional)</label>
                                                            <div
                                                                class="field__input-wrapper field__input-wrapper--icon-right">
                                                                <input placeholder="Phone (optional)"
                                                                    autocomplete="billing tel" autocorrect="off"
                                                                    data-backup="phone" data-phone-formatter="true"
                                                                    data-phone-formatter-country-select="[name=&#39;checkout[billing_address][country]&#39;]"
                                                                    class="field__input field__input--numeric" size="30"
                                                                    type="tel" name="checkout[billing_address][phone]"
                                                                    id="checkout_billing_address_phone" />
                                                                <div class="field__icon">
                                                                    <div data-tooltip="true" id="phone_tooltip"
                                                                        class="tooltip-container"><button type="button"
                                                                            class="tooltip-control"
                                                                            data-tooltip-control="true"
                                                                            aria-label="More information"
                                                                            aria-describedby="tooltip-for-phone"
                                                                            aria-controls="tooltip-for-phone"
                                                                            aria-pressed="false"><svg
                                                                                class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-16 icon-svg--block icon-svg--center"
                                                                                role="presentation" aria-hidden="true"
                                                                                focusable="false">
                                                                                <use xlink:href="#question" />
                                                                            </svg></button><span class="tooltip"
                                                                            role="tooltip" id="tooltip-for-phone">In
                                                                            case we need to contact you about your
                                                                            order</span></div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>

                                <div class="section section--remember-me shown-if-js hidden" data-remember-me>
                                    <div class="section__header">
                                        <h2 class="section__title">Remember me</h2>
                                    </div>

                                    <div class="section__content">
                                        <div class="content-box">
                                            <div class="content-box__row">
                                                <div class="checkbox-wrapper">
                                                    <div class="checkbox__input">
                                                        <input size="30" type="hidden" value="false"
                                                            name="checkout[remember_me]" />
                                                        <input name="checkout[remember_me]" type="hidden"
                                                            value="0" /><input class="input-checkbox"
                                                            data-backup="remember_me" data-remember-me-opt-in="true"
                                                            aria-controls="section--remember-me__phone" type="checkbox"
                                                            value="1" name="checkout[remember_me]"
                                                            id="checkout_remember_me" />
                                                    </div>

                                                    <label class="checkbox__label content-box__emphasis"
                                                        for="checkout_remember_me">
                                                        Save my information for a faster checkout
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="content-box__row content-box__row--secondary"
                                                data-remember-me-phone id="section--remember-me__phone">
                                                <div class="fieldset">
                                                    <div class="field--half field field--optional">
                                                        <label class="field__label" for="checkout_vault_phone">Mobile
                                                            phone number</label>
                                                        <div
                                                            class="field__input-wrapper field__input-wrapper--icon-left">
                                                            <input placeholder="Mobile phone number"
                                                                autocomplete="mobile tel"
                                                                aria-describedby="remember-me-opt-in-description"
                                                                data-backup="vault_phone"
                                                                data-remember-me-phone-input="true"
                                                                data-phone-flag-input="true"
                                                                data-phone-flag-input-default-country="Cyprus"
                                                                data-phone-formatter="true"
                                                                data-phone-formatter-insert-country-code="true"
                                                                data-phone-formatter-e164="true"
                                                                data-phone-formatter-region-code="CY"
                                                                data-phone-flag-label="Country/Region code"
                                                                class="field__input field__input--numeric"
                                                                maxlength="25" size="30" type="tel" value="+16289743711"
                                                                name="checkout" id="checkout_vault_phone" />
                                                            <div id="remember_me_mobile_phone_number_tooltip"
                                                                class="field__icon">
                                                                <div class="field__icon-svg"><svg
                                                                        class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-24 icon-svg--block"
                                                                        aria-hidden="true" focusable="false">
                                                                        <use xlink:href="#mobile-phone" />
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p id="remember-me-opt-in-description" class="fieldset-description">
                                                    Next time you check out here or on other stores powered by Shopify,
                                                    you’ll receive a code by text message to securely purchase with Shop
                                                    Pay.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="section__content__policy small-text" data-remember-me-terms>
                                        By continuing, you agree to Shop Pay’s <a href="#" class="link--muted"
                                            data-remember-policy-link="privacy_policy" target="_blank"
                                            rel="noopener noreferrer">Privacy Policy</a> and <a href="#"
                                            class="link--muted" data-remember-policy-link="terms" target="_blank"
                                            rel="noopener noreferrer">Terms of Service</a>.
                                    </p>
                                </div>




                                <div class="step__footer" data-step-footer>
                                    <input type="hidden" name="checkout[total_price]" id="checkout_total_price"
                                        value="48100" />
                                    <input type="hidden" name="complete" value="1" />

                                    <div class="shown-if-js">
                                        <button name="button" type="submit" id="continue_button"
                                            class="step__footer__continue-btn btn" aria-busy="false"><span
                                                class="btn__content" data-continue-button-content="true">Pay
                                                now</span><svg
                                                class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                                                aria-hidden="true" focusable="false">
                                                <use xlink:href="#spinner-button" />
                                            </svg></button>

                                    </div>
                                    <div class="hidden-if-js">
                                        <button name="button" type="submit" id="continue_button"
                                            class="step__footer__continue-btn btn" aria-busy="false"><span
                                                class="btn__content" data-continue-button-content="true">Continue to
                                                payment</span><svg
                                                class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                                                aria-hidden="true" focusable="false">
                                                <use xlink:href="#spinner-button" />
                                            </svg></button>
                                    </div>
                                    <a class="step__footer__previous-link"
                                        href="/24857096/checkouts/6388e169f46c57c0ffc96ac01919ca72?step=shipping_method"><svg
                                            focusable="false" aria-hidden="true"
                                            class="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                            <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4" />
                                        </svg><span class="step__footer__previous-link-content">Return to
                                            shipping</span></a>
                                </div>

                            </form>
                        </div>

                    </div>


                    <div class="hidden">
                        <span class="visually-hidden" id="forwarding-external-new-window-message">
                            Opens external website in a new window.
                        </span>

                        <span class="visually-hidden" id="forwarding-new-window-message">
                            Opens in a new window.
                        </span>

                        <span class="visually-hidden" id="forwarding-external-message">
                            Opens external website.
                        </span>

                        <span class="visually-hidden" id="checkout-context-step-one">
                            Customer information - Case Warehouse - Checkout
                        </span>
                    </div>

                </main>
                <!-- Footer Begin -->
                <footer class="main__footer" role="contentinfo">
                    <ul class="policy-list" role="list">
                        <li class="policy-list__item ">
                            <a aria-haspopup="dialog" data-modal="policy-refund-policy" data-title-text="Refund policy"
                                data-close-text="Close" data-iframe="true" href="#">Refund policy</a>
                        </li>
                        <li class="policy-list__item ">
                            <a aria-haspopup="dialog" data-modal="policy-privacy-policy"
                                data-title-text="Privacy policy" data-close-text="Close" data-iframe="true"
                                href="#">Privacy policy</a>
                        </li>
                        <li class="policy-list__item ">
                            <a aria-haspopup="dialog" data-modal="policy-terms-of-service"
                                data-title-text="Terms of service" data-close-text="Close" data-iframe="true"
                                href="#">Terms of service</a>
                        </li>
                    </ul>
                </footer>
                <!-- Footer End -->
            </div>

            <!-- Order Summary Begin -->
            <aside class="sidebar" role="complementary">
                <div class="sidebar__header">

                    <a class="logo logo--left" href="index.php"><img alt="Case Warehouse"
                            class="logo__image logo__image--medium" src="assets/img/TMC/clogo.png" /></a>

                    <h1 class="visually-hidden">
                        Payment
                    </h1>


                </div>
                <div class="sidebar__content">
                    <div id="order-summary" class="order-summary order-summary--is-collapsed" data-order-summary>
                        <h2 class="visually-hidden-if-js">Order summary</h2>

                        <div class="order-summary__sections">
                            <div class="order-summary__section order-summary__section--product-list">
                                <div class="order-summary__section__content">
                                    <table class="product-table">
                                        <caption class="visually-hidden">Shopping cart</caption>
                                        <thead class="product-table__header">
                                            <tr>
                                                <th scope="col"><span class="visually-hidden">Product image</span></th>
                                                <th scope="col"><span class="visually-hidden">Description</span></th>
                                                <th scope="col"><span class="visually-hidden">Quantity</span></th>
                                                <th scope="col"><span class="visually-hidden">Price</span></th>
                                            </tr>
                                        </thead>
                                        <tbody data-order-summary-section="line-items">
                                            <tr class="product" data-product-id="4939570970677"
                                                data-variant-id="33193848012853" data-product-type="Custom Phone Case"
                                                data-customer-ready-visible>
                                                <td class="product__image">
                                                    <div class="product-thumbnail ">
                                                        <div class="product-thumbnail__wrapper">
                                                            <img alt="Custom Album Art Black Impact Phone Case for iPhone 11 Pro Max"
                                                                class="product-thumbnail__image"
                                                                src="assets/img/iphone.jpg" />
                                                        </div>
                                                        <span class="product-thumbnail__quantity"
                                                            aria-hidden="true">13</span>
                                                    </div>

                                                </td>
                                                <th class="product__description" scope="row">
                                                    <span
                                                        class="product__description__name order-summary__emphasis">Custom
                                                        Album Art iPhone Case</span>
                                                    <span
                                                        class="product__description__variant order-summary__small-text">iPhone
                                                        12 | 12 Pro / Black Impact</span>

                                                </th>
                                                <td class="product__quantity">
                                                    <span class="visually-hidden">
                                                        13
                                                    </span>
                                                </td>
                                                <td class="product__price">
                                                    <span class="order-summary__emphasis skeleton-while-loading">$481.00
                                                        AUD</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="order-summary__scroll-indicator" aria-hidden="true" tabindex="-1">
                                        Scroll for more items
                                        <svg aria-hidden="true" focusable="false" class="icon-svg icon-svg--size-12">
                                            <use xlink:href="#down-arrow" />
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div class="order-summary__section order-summary__section--discount"
                                data-reduction-form="update">
                                <h3 class="visually-hidden">Gift card or discount code</h3>
                                <form class="edit_checkout"
                                    action="/24857096/checkouts/6388e169f46c57c0ffc96ac01919ca72" accept-charset="UTF-8"
                                    method="post"><input type="hidden" name="_method" value="patch" /><input
                                        type="hidden" name="authenticity_token"
                                        value="QCBB02kERcGlpp/wRMVoG+wsH67XGUumlk5eQUihDpgbHAfgNTHaVAn6WUYXGMDLvQE5F+wqzPpKX0BvnfO4Mw==" />
                                    <input type="hidden" name="step" value="payment_method" />
                                </form>
                                <form class="edit_checkout"
                                    action="/24857096/checkouts/6388e169f46c57c0ffc96ac01919ca72" accept-charset="UTF-8"
                                    method="post"><input type="hidden" name="_method" value="patch" /><input
                                        type="hidden" name="authenticity_token"
                                        value="xHUEZCf+TCvDwPdsVl01eECWsrkunlhT7W4D7v8zFUefSUJXe8vTvm+cMdoFgJ2oEbuUABWt3w8xfx3AKmGj7A==" />
                                    <input type="hidden" name="step" value="payment_method" />
                                    <div class="fieldset">
                                        <div class="field ">
                                            <label class="field__label" for="checkout_reduction_code">Gift card or
                                                discount code</label>
                                            <div class="field__input-btn-wrapper">
                                                <div class="field__input-wrapper">
                                                    <input placeholder="Gift card or discount code" class="field__input"
                                                        id="checkout_reduction_code" data-discount-field="true"
                                                        autocomplete="off" aria-required="true" size="30" type="text"
                                                        value=" " name="checkout[reduction_code]" />
                                                </div>

                                                <button name="button" type="submit"
                                                    class="field__input-btn btn btn--disabled" aria-busy="false">
                                                    <span class="btn__content visually-hidden-on-mobile"
                                                        aria-hidden="true">
                                                        Apply
                                                    </span>
                                                    <span class="visually-hidden">
                                                        Apply Discount Code
                                                    </span>
                                                    <svg class="icon-svg icon-svg--size-16 btn__icon shown-on-mobile"
                                                        aria-hidden="true" focusable="false">
                                                        <use xlink:href="#arrow" />
                                                    </svg>
                                                    <svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                                                        aria-hidden="true" focusable="false">
                                                        <use xlink:href="#spinner-button" />
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div class="order-summary__section order-summary__section--total-lines"
                                data-order-summary-section="payment-lines">
                                <table class="total-line-table">
                                    <caption class="visually-hidden">Cost summary</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col"><span class="visually-hidden">Description</span></th>
                                            <th scope="col"><span class="visually-hidden">Price</span></th>
                                        </tr>
                                    </thead>
                                    <tbody class="total-line-table__tbody">
                                        <tr class="total-line total-line--subtotal">
                                            <th class="total-line__name" scope="row">Subtotal</th>
                                            <td class="total-line__price">
                                                <span class="order-summary__emphasis skeleton-while-loading"
                                                    data-checkout-subtotal-price-target="48100">
                                                    $481.00 AUD
                                                </span>
                                            </td>
                                        </tr>


                                        <tr class="total-line total-line--shipping">
                                            <th class="total-line__name" scope="row">
                                                <span>
                                                    Shipping
                                                </span>

                                            </th>
                                            <td class="total-line__price">
                                                <span class="skeleton-while-loading order-summary__emphasis"
                                                    data-checkout-total-shipping-target="0">
                                                    Free
                                                </span>
                                            </td>
                                        </tr>






                                    </tbody>
                                    <tfoot class="total-line-table__footer">
                                        <tr class="total-line">
                                            <th class="total-line__name payment-due-label" scope="row">
                                                <span class="payment-due-label__total">Total</span>
                                                <span class="payment-due-label__taxes order-summary__small-text "
                                                    data-checkout-taxes>
                                                    Including <span data-checkout-total-taxes-target="8017">$80.17
                                                        AUD</span> in taxes
                                                </span>
                                            </th>
                                            <td class="total-line__price payment-due" data-presentment-currency="AUD">
                                                <span class="payment-due__price skeleton-while-loading--lg"
                                                    data-checkout-payment-due-target="48100">
                                                    $481.00 AUD
                                                </span>
                                            </td>
                                        </tr>

                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="visually-hidden" data-order-summary-section="accessibility-live-region">
                        <div aria-live="polite" aria-atomic="true" role="status">
                            Updated total price:
                            <span data-checkout-payment-due-target="48100">
                                $481.00 AUD
                            </span>
                        </div>
                    </div>


                    <div id="partial-icon-symbols" class="icon-symbols" data-tg-refresh="partial-icon-symbols"
                        data-tg-refresh-always="true"><svg xmlns="http://www.w3.org/2000/svg">
                            <symbol id="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z" />
                                </svg></symbol>
                            <symbol id="spinner-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z" />
                                </svg></symbol>
                            <symbol id="error-major"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                    <g fill-rule="evenodd">
                                        <path
                                            d="M30 60C13.43 60 0 46.57 0 30S13.43 0 30 0s30 13.43 30 30-13.43 30-30 30zm0-2c15.464 0 28-12.536 28-28S45.464 2 30 2 2 14.536 2 30s12.536 28 28 28z" />
                                        <path
                                            d="M30.134 48.856c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5z"
                                            fill-rule="nonzero" />
                                        <rect x="29" y="11" width="2" height="27" rx="1" />
                                    </g>
                                </svg></symbol>
                            <symbol id="error"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-16c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1V7c0-.552.448-1 1-1zm-1.5 10.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z" />
                                </svg></symbol>
                            <symbol id="lock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M12 6h-1V4c0-2.2-1.8-4-4-4S3 1.8 3 4v2H2c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h10c.5 0 1-.5 1-1V7c0-.5-.5-1-1-1zM5 4c0-1.1.9-2 2-2s2 .9 2 2v2H5V4z" />
                                </svg></symbol>
                            <symbol id="question"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.7 13H6.8v-2h1.9v2zm2.6-7.1c0 1.8-1.3 2.6-2.8 2.8l-.1 1.1H7.3L7 7.5l.1-.1c1.8-.1 2.6-.6 2.6-1.6 0-.8-.6-1.3-1.6-1.3-.9 0-1.6.4-2.3 1.1L4.7 4.5c.8-.9 1.9-1.6 3.4-1.6 1.9.1 3.2 1.2 3.2 3z" />
                                </svg></symbol>
                            <symbol id="info"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12 11h1v7h-2v-5c-.552 0-1-.448-1-1s.448-1 1-1h1zm0 13C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.5 7.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z" />
                                </svg></symbol>
                            <symbol id="caret-down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                    <path d="M0 3h10L5 8" fill-rule="nonzero" />
                                </svg></symbol>
                            <symbol id="powered-by-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 15">
                                    <path fill="#737373"
                                        d="M4.025 3.572c1.612 0 2.655 1.283 2.655 3.27 0 1.974-1.05 3.27-2.655 3.27-.902 0-1.63-.393-1.974-1.06h-.09v3.057H.95V3.68h.96v1.054h.094c.404-.726 1.16-1.166 2.02-1.166zm-.24 5.63c1.16 0 1.852-.884 1.852-2.36 0-1.477-.692-2.362-1.846-2.362-1.14 0-1.86.91-1.86 2.362 0 1.447.72 2.36 1.857 2.36zm7.072.91c-1.798 0-2.912-1.243-2.912-3.27 0-2.033 1.114-3.27 2.912-3.27 1.8 0 2.913 1.237 2.913 3.27 0 2.027-1.114 3.27-2.913 3.27zm0-.91c1.196 0 1.87-.866 1.87-2.36 0-1.5-.674-2.362-1.87-2.362-1.195 0-1.87.862-1.87 2.362 0 1.494.675 2.36 1.87 2.36zm12.206-5.518H22.05l-1.244 5.05h-.094L19.3 3.684h-.966l-1.412 5.05h-.094l-1.242-5.05h-1.02L16.336 10h1.02l1.406-4.887h.093L20.268 10h1.025l1.77-6.316zm3.632.78c-1.008 0-1.71.737-1.787 1.856h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.9h1.005c-.305 1.085-1.277 1.747-2.66 1.747-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zM31.03 10h1.01V6.086c0-.89.696-1.535 1.657-1.535.2 0 .563.038.645.06V3.6c-.13-.018-.34-.03-.504-.03-.838 0-1.565.434-1.752 1.05h-.094v-.938h-.96V10zm6.915-5.537c-1.008 0-1.71.738-1.787 1.857h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.902h1.005c-.304 1.084-1.277 1.746-2.66 1.746-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zm5.01 1.746c-1.62 0-2.657-1.28-2.657-3.266 0-1.98 1.05-3.27 2.654-3.27.878 0 1.622.416 1.98 1.108h.087V1.177h1.008V10h-.96V8.992h-.094c-.4.703-1.15 1.12-2.02 1.12zm.232-5.63c-1.15 0-1.846.89-1.846 2.364 0 1.476.69 2.36 1.846 2.36 1.148 0 1.857-.9 1.857-2.36 0-1.447-.715-2.362-1.857-2.362zm7.875-3.115h1.024v3.123c.23-.3.507-.53.827-.688.32-.16.668-.238 1.043-.238.78 0 1.416.27 1.9.806.49.537.73 1.33.73 2.376 0 .992-.24 1.817-.72 2.473-.48.656-1.145.984-1.997.984-.476 0-.88-.114-1.207-.344-.195-.137-.404-.356-.627-.657v.8h-.97V1.363zm4.02 7.225c.284-.454.426-1.05.426-1.794 0-.66-.142-1.207-.425-1.64-.283-.434-.7-.65-1.25-.65-.48 0-.9.177-1.264.532-.36.356-.542.942-.542 1.758 0 .59.075 1.068.223 1.435.277.694.795 1.04 1.553 1.04.57 0 .998-.227 1.28-.68zM63.4 3.726h1.167c-.148.402-.478 1.32-.99 2.754-.383 1.077-.703 1.956-.96 2.635-.61 1.602-1.04 2.578-1.29 2.93-.25.35-.68.527-1.29.527-.147 0-.262-.006-.342-.017-.08-.012-.178-.034-.296-.065v-.96c.183.05.316.08.4.093.08.012.152.018.215.018.195 0 .338-.03.43-.094.092-.065.17-.144.232-.237.02-.033.09-.193.21-.48.122-.29.21-.506.264-.646l-2.32-6.457h1.196l1.68 5.11 1.694-5.11zM73.994 5.282V6.87h3.814c-.117.89-.416 1.54-.87 1.998-.557.555-1.427 1.16-2.944 1.16-2.35 0-4.184-1.882-4.184-4.217 0-2.332 1.835-4.215 4.184-4.215 1.264 0 2.192.497 2.873 1.135l1.122-1.117C77.04.697 75.77 0 73.99 0c-3.218 0-5.923 2.606-5.923 5.805 0 3.2 2.705 5.804 5.923 5.804 1.738 0 3.048-.57 4.073-1.628 1.05-1.045 1.382-2.522 1.382-3.71 0-.366-.028-.708-.087-.992h-5.37zm10.222-1.29c-2.082 0-3.78 1.574-3.78 3.748 0 2.154 1.698 3.747 3.78 3.747S87.998 9.9 87.998 7.74c0-2.174-1.7-3.748-3.782-3.748zm0 6.018c-1.14 0-2.127-.935-2.127-2.27 0-1.348.983-2.27 2.124-2.27 1.142 0 2.128.922 2.128 2.27 0 1.335-.986 2.27-2.128 2.27zm18.54-5.18h-.06c-.37-.438-1.083-.838-1.985-.838-1.88 0-3.52 1.632-3.52 3.748 0 2.102 1.64 3.747 3.52 3.747.905 0 1.618-.4 1.988-.852h.06v.523c0 1.432-.773 2.2-2.012 2.2-1.012 0-1.64-.723-1.9-1.336l-1.44.593c.414.994 1.51 2.213 3.34 2.213 1.94 0 3.58-1.135 3.58-3.902v-6.74h-1.57v.645zm-1.9 5.18c-1.144 0-2.013-.968-2.013-2.27 0-1.323.87-2.27 2.01-2.27 1.13 0 2.012.967 2.012 2.282.006 1.31-.882 2.258-2.01 2.258zM92.65 3.992c-2.084 0-3.783 1.574-3.783 3.748 0 2.154 1.7 3.747 3.782 3.747 2.08 0 3.78-1.587 3.78-3.747 0-2.174-1.7-3.748-3.78-3.748zm0 6.018c-1.143 0-2.13-.935-2.13-2.27 0-1.348.987-2.27 2.13-2.27 1.14 0 2.126.922 2.126 2.27 0 1.335-.986 2.27-2.127 2.27zM105.622.155h1.628v11.332h-1.628m6.655-1.477c-.843 0-1.44-.38-1.83-1.135l5.04-2.07-.168-.426c-.314-.84-1.274-2.39-3.227-2.39-1.94 0-3.554 1.516-3.554 3.75 0 2.1 1.595 3.745 3.736 3.745 1.725 0 2.724-1.05 3.14-1.658l-1.285-.852c-.427.62-1.01 1.032-1.854 1.032zm-.117-4.612c.668 0 1.24.342 1.427.826l-3.405 1.4c0-1.574 1.122-2.226 1.978-2.226z" />
                                </svg></symbol>
                            <symbol id="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path
                                        d="M15.1 2.3L13.7.9 8 6.6 2.3.9.9 2.3 6.6 8 .9 13.7l1.4 1.4L8 9.4l5.7 5.7 1.4-1.4L9.4 8" />
                                </svg></symbol>
                            <symbol id="mobile-phone"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M5 2.99C5 1.34 6.342 0 8.003 0h7.994C17.655 0 19 1.342 19 2.99v18.02c0 1.65-1.342 2.99-3.003 2.99H8.003C6.345 24 5 22.658 5 21.01V2.99zM7 5c0-.552.456-1 .995-1h8.01c.55 0 .995.445.995 1v14c0 .552-.456 1-.995 1h-8.01C7.445 20 7 19.555 7 19V5zm5 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                                        fill-rule="evenodd" />
                                </svg></symbol>
                            <symbol id="chevron-right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                    <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4" />
                                </svg></symbol>
                            <symbol id="down-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                                    <path
                                        d="M10.817 7.624l-4.375 4.2c-.245.235-.64.235-.884 0l-4.375-4.2c-.244-.234-.244-.614 0-.848.245-.235.64-.235.884 0L5.375 9.95V.6c0-.332.28-.6.625-.6s.625.268.625.6v9.35l3.308-3.174c.122-.117.282-.176.442-.176.16 0 .32.06.442.176.244.234.244.614 0 .848" />
                                </svg></symbol>
                            <symbol id="spinner-small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path
                                        d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z" />
                                </svg></symbol>
                        </svg></div>


                </div>
            </aside>
            <!-- Order Summary End -->

        </div>
    </div>

</body>

</html>