import {createContext} from "react";
import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://loznajmqnsqjypqxfavr.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const SupabaseContext = createContext(supabase)

export default SupabaseContext
