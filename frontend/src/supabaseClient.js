import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faveqjkhglwhxmoqokaq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhdmVxamtoZ2x3aHhtb3Fva2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NDc3OTAsImV4cCI6MjA2NzQyMzc5MH0.ub0nvcDdTEidQdJJPt0ysO-tARFx-8wd4eBSZhJ5fMY';

export const supabase = createClient(supabaseUrl, supabaseKey);