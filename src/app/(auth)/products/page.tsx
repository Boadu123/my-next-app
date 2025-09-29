import Link from "next/link"

export default function ProductsList() {
    const productId = 10
    return <>
        <h1>Product List</h1>
        <Link href="/product/1"> Product 1</Link>
        <Link href="/product/2"> Product 1</Link>
        <Link href="/product/3"> Product 1</Link>
        <Link href={`/product/${productId}`}> Product {productId}</Link>
       
        <Link href="/"> Home</Link>
    </>
}