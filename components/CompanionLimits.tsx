import { AlertTriangle } from 'lucide-react'
import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

const CompanionLimits = () => {
  return (
  <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-lg font-bold  mb-2">
              Companion Limit Reached
            </h3>
            <p className="text-muted-foreground text-lg">
              You&apos;ve reached the maximum number of companions for your current plan
            </p>
          </div>

   

          {/* Alternative Actions */}
          <div className="mt-6 flex gap-3 justify-center r">
            <Link href={"/subscription"} >
            <Button variant="outline" size="sm" className='cursor-pointer'>
             View Subscription Plans
            </Button>
            </Link>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanionLimits