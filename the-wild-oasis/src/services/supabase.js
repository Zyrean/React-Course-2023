import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cqrkqdddhgtyeqndukmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxcmtxZGRkaGd0eWVxbmR1a216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNjkzMDIsImV4cCI6MjAyMzk0NTMwMn0.lbvdE9lLke9noxQCqq1_lNpy3sFIec1UiUU6rctNhhM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
