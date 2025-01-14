import { Link, useParams } from "react-router-dom"

export default function ProductDetail() {
  const params = useParams()
  return (
  <>
  <h1>My Product Detail page</h1>
  <h2>{params.productId} deatils</h2>
  <p><Link to=".." relative="path">Back</Link></p>
  </>)
}
