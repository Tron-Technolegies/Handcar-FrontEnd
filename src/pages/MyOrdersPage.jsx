import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useGetOrderHistory from "../hooks/auth/useGetOrderHistory";
import Loading from "../components/Loading";

export default function MyOrdersPage() {
  const { loading, refetch, orders } = useGetOrderHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lg:px-[120px] px-10 py-10 min-h-screen">
      <p className="text-xl font-semibold my-10">My Orders</p>
      {loading ? (
        <Loading />
      ) : orders.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Orders Id
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Items
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Coupons
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Status
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>
                  Order Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row, index) => (
                <TableRow
                  key={row.order_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    {row.order_id}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <div className="flex flex-col items-center gap-3">
                      {row.items.map((item) => (
                        <div key={item.id} className="flex flex-col gap-1">
                          <p>{item.name}</p>
                          <p>
                            {item.quantity} x {item.price} ={" "}
                            {parseInt(item.quantity) * parseInt(item.price)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.coupon ? (
                      <div className="flex flex-col gap-1">
                        <p>{row.coupon?.name}</p>
                        <p>{row.coupon?.coupon_code}</p>
                        <p>Discount: {row.coupon?.discount_percentage}%</p>
                      </div>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.coupon ? (
                      <div className="flex flex-col gap-1">
                        <p className="line-through">{row.total_price}</p>
                        <p>
                          {parseInt(row.total_price) -
                            parseInt(row.total_price) *
                              (parseInt(row.coupon.discount_percentage) / 100)}
                        </p>
                      </div>
                    ) : (
                      row.total_price
                    )}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.status}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.created_at}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No orders Available</p>
      )}
    </div>
  );
}
