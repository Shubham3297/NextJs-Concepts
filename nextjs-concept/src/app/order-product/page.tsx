"use client";

// import { useRouter } from "next/router"; // Dont use here
import { useRouter } from "next/navigation"; // For programmtically navigation use this

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placeing Your Order");
    router.push("/");
    // router.replace("/"); // History maintain kart nhi.
    // router.back("/");   // Magcha show hoto
    // router.forward("/"); // pudhcha show hoto
  };
  return (
    <>
      <h1> Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
