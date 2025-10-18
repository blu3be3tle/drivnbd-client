const Order = () => {

    return (
        <div className="mt-6 card bg-base-100 shadow-sm">
            <div className="card-body">
                <h3 className="card-title text-lg">Recent Orders</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#ORD-7245</td>
                                <td>John Smith</td>
                                <td>
                                    <div className="badge badge-success">Completed</div>
                                </td>
                                <td>Oct 8, 2025</td>
                                <td>Tk 2500.00</td>
                            </tr>
                            <tr>
                                <td>#ORD-7244</td>
                                <td>Sarah Johnson</td>
                                <td>
                                    <div className="badge badge-warning">Processing</div>
                                </td>
                                <td>Oct 7, 2025</td>
                                <td>Tk 1250.00</td>
                            </tr>
                            <tr>
                                <td>#ORD-7243</td>
                                <td>Michael Brown</td>
                                <td>
                                    <div className="badge badge-info">Shipped</div>
                                </td>
                                <td>Oct 7, 2025</td>
                                <td>Tk 580.00</td>
                            </tr>
                            <tr>
                                <td>#ORD-7242</td>
                                <td>Emily Davis</td>
                                <td>
                                    <div className="badge badge-success">Completed</div>
                                </td>
                                <td>Oct 6, 2025</td>
                                <td>Tk 400.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Order;