import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation"
import React from 'react'

const CompanionsLibrary = async ({searchParams}:SearchParams) => {


    const {userId} = await auth()
  
    if(!userId) redirect("/sign-in")
  const filters = await searchParams;

  const subject = filters.subject?filters.subject:''
  const topic = filters.topic?filters.topic:''

  const companions = await getAllCompanions({subject,topic,userId})


  return (
      <main>
        <section className='flex justify-between items-center gap-4 max-sm:flex-col'>
          <h1>Companion Library</h1>
          <div className='flex gap-4'>
            <SearchInput/>
            <SubjectFilter />
          </div>
        </section>

        <section className='companions-grid'> 
          {companions.map((companion)=>(
            <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>
          ))}
        </section>
      </main>
  )
}

export default CompanionsLibrary