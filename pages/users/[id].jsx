import { useRouter } from "next/router"

export default function USerGetPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
    <h1>Opre user {id}</h1>
    </>
  )
}