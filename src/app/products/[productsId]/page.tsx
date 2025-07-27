export default async function ProductDetails ({params}:{params:Promise<{productId:string}>}) {
    const productId = (await params).productId;
    return (
        <h1 className="py-60">Details for {productId}</h1>
    )
}