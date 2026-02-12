import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qjrrrfdsihnvxxaxnvzl.supabase.co";
const supabaseKey = "sb_publishable_c7DvSITnNOV_hLYyCLWANw_JLj06rGU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
