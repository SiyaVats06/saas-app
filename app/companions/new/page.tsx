import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermission } from "@/lib/actions/companion.actions"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


const NewComapnion = async() => {

  const {userId} = await auth()
  if(!userId) redirect("/sign-in")

  const canCreateCompanion = await newCompanionPermission()  

  return (
<main className="flex justify-center items-center w-2/3 py-20">
{canCreateCompanion?(
    <article className="flex flex-col gap-4 items-center justify-center w-full">
    <h1>Companion Builder</h1>
    <CompanionForm />
  </article>)
:(
  <article>
    <h1>Sorry You have to Upgrade</h1>
  </article>
)}

</main>
  )
}

export default NewComapnion