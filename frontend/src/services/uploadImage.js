import { supabase } from '../supabaseClient';

export async function uploadImageToSupabase(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = fileName; // Sin slash inicial

  let { error } = await supabase.storage
    .from('imagenes')
    .upload(filePath, file);

  if (error) throw error;

  const { data } = supabase
    .storage
    .from('imagenes')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
