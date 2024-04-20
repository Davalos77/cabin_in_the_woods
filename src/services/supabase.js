import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fmphdqqxhxzgxpbiwlqt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtcGhkcXF4aHh6Z3hwYml3bHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NDI2MzQsImV4cCI6MjAyODUxODYzNH0.6JlrfA8kVxB6yGBG-27bOoAeRp3G7BsCk70AwiBXRJo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
