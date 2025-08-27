import { auth } from '@clerk/nextjs/server';
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createSupabaseClient=()=>{
    return createBrowserClient(supabaseUrl!,supabaseKey!,{
        async accessToken(){
            return((await auth()).getToken())
        }
    })
}