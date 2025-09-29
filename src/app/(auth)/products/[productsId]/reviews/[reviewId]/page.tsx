import { notFound } from "next/navigation";

export default async function ProductReview({params, }: {params: Promise<{ productsId: string, reviewId: string}>}) {
        const { productsId, reviewId} = await params;
        if(parseInt(reviewId) > 1000){
            notFound();
        }
    return <>
        <h1>Review {reviewId} Product {productsId}</h1>
    </>
}