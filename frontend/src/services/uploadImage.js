import { supabase } from '../supabaseClient';

export async function uploadImageToSupabase(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  // Sube la imagen al bucket (ajusta el nombre del bucket si es diferente)
  let { error } = await supabase.storage
    .from('imagenes')
    .upload(filePath, file);

  if (error) throw error;

  // Obtén la URL pública
  const { data } = supabase
    .storage
    .from('imagenes')
    .getPublicUrl(filePath);

  return data.publicUrl; // Esta URL la puedes guardar en tu base de datos
}
