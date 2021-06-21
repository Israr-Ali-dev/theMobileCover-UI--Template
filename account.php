<?php include('includes/header.php');?>

<!-- Main Content Begin -->
<main class="main-content" id="MainContent">
    <div class="page-width page-content customers">
        <header class="section-header">
            <h1 class="section-header__title">My account</h1>
            <br>
            <a href="#" id="customer_logout_link">Log out</a>
        </header>

        <div class="grid">

            <div class="grid__item medium-up--three-quarters">
                <h2 class="h3">Order History</h2>

                <p>You haven't placed any orders yet.</p>
                <div class="cus-scroll" style="overflow-x:auto;">
                    <table class="order-detailTable">
                        <tr>
                            <th>Order #</th>
                            <th>Product List</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Order Date</th>
                            <th>Shipping Date</th>
                            <th>Shipping Method</th>
                            <th>Payment Method</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><a href="javascript:void(0);" class="order-detail">View</a></td>
                            <td>$5000</td>
                            <td>Delivered</td>
                            <td>1-12-20</td>
                            <td>5-12-20</td>
                            <td>DHL</td>
                            <td>PayPal</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><a href="javascript:void(0);" class="order-detail">View</a></td>
                            <td>$5000</td>
                            <td>Delivered</td>
                            <td>1-12-20</td>
                            <td>5-12-20</td>
                            <td>DHL</td>
                            <td>PayPal</td>
                        </tr>
                    </table>
                </div>

            </div>

            <div class="grid__item medium-up--one-quarter">
                <h3>Account details</h3>

                <div class="profile-container">
                    <form action="#" class="is-readonly">
                        <div class="form-group">
                            <label for="exampleInputPassword1">First Name</label>
                            <input type="text" class="form-control is-disabled" id="exampleInputPassword1"
                                placeholder="Name" value="SamaraSsr" disabled>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Last Name</label>
                            <input type="text" class="form-control is-disabled" id="exampleInputPassword1"
                                placeholder="Name" value="SamaraSsr" disabled>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control is-disabled" id="exampleInputPassword1"
                                placeholder="Name" value="SamaraSsr" disabled>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control is-disabled" id="exampleInputEmail1"
                                placeholder="Email" value="ali@company.com" disabled>
                        </div>
                        <button type="button" class="btn btn-default btn-edit js-edit">Edit</button>
                        <button type="button" class="btn btn-default btn-save js-save">Save</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</main>

<!-- Main Content End -->

<!-- Order Detail -->
<div class="obscure">
    <div class="popup animationClose">
        <div style="overflow-x:auto;">
            <h3 class="fl">Products List</h3>
            <table>
                <tr>
                    <th>Sr #</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Qty</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mobile 1</td>
                    <td>$500</td>
                    <td><img src="assets/img/t.png" width="50"></td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mobile 2</td>
                    <td>#94</td>
                    <td><img src="assets/img/t.png" width="50"></td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mobile 3</td>
                    <td>$240</td>
                    <td><img src="assets/img/t.png" width="50"></td>
                    <td>6</td>
                </tr>
            </table>
        </div>
        <a class="closeOrderDetail" href="#">X</a>
    </div>
</div>


<?php include('includes/footer.php')?>