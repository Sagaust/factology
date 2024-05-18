import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fbuswputaujzfyjduisc.supabase.co";
const supabaseKey =
  "eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidXN3cHV0YXVqemZ5amR1aXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNTEyMTksImV4cCI6MjAzMTYyNzIxOX0.scQZY6TeTbbanb6-3-y7Kn3I5Qmu0F8qky9Us3z1w5A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
