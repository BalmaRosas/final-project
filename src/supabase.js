import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tahyrldhtyecnfcplqpr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhaHlybGRodHllY25mY3BscXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4MTUwMTEsImV4cCI6MTk3NjM5MTAxMX0.H3BPpFT25zYOoVomRaGcAWC7O4ipfS82VFCexMziASw";
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
