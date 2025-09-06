"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabaase";

// Fn to create a companion
export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companion")
    .insert({ ...formData, author })
    .select();

  if (error || !data)
    throw new Error(error?.message || "Failed to create Companion");

  return data[0];
};

// Fn to get the data of all comapnions
export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
  userId,
}: GetAllCompanions) => {
  const supabase = createSupabaseClient();

  let query = supabase.from("companion").select().eq("author", userId);

  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic},name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic},name.ilike.%${topic}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;

  if (error) throw new Error(error?.message);

  return companions;
};

// Fn to get data of a single companion
export const getCompanion = async (id: string) => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companion")
    .select()
    .eq("id", id);

  if (error) return console.log(error);

  return data[0];
};

// Fn to add Recent Session in DB
export const addToSessionHistory = async (companionId: string) => {
  const { userId } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("session_history")
    .insert({
      user_id: userId,
      companion_id: companionId,
    })
    .select();

  if (error) throw new Error(error?.message);

  return data;
};

// Fn to get Recent Sessions
export const getRecentSessions = async (limit=10) => {
  const { userId } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("session_history")
    .select('companion:companion_id(*)')
    .limit(limit)
    .eq("user_id", userId);
     
  if (error) throw new Error(error?.message);

   return data.map(({ companion }) => companion);
};

// Fn to get All Companions (without subject and topic params)
export const getAllUserCompanions = async (UserId: string) => {
  const supabase = createSupabaseClient();

  const { data: companions, error } = await supabase
    .from("companion")
    .select()
    .eq("author", UserId);

  if(error) throw new Error(error.message);

  return companions;
};



// //Fn to check the current user plan to create companion according to it
export const newCompanionPermission = async () =>{
  const {userId , has} = await auth();
  const supabase = await createSupabaseClient();

  let limit = 0;

  if(has({plan:'pro'})){
    return true
  }else if(has({feature:"3_companion_limit"})){
    limit = 3;
  }else if(has({feature:"10_companion_limit"})){
    limit = 10;
  }

  const {data, error} = await supabase.from('companion').select('id',{count:'exact'}).eq('author',userId)
 
  if(error) throw new Error(error.message);

  const companionCount = data?.length;

  if(companionCount >= limit){
    return false
  }else{
    return true
  }

}
