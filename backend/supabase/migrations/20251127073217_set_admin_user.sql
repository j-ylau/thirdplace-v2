-- Set admin role for jylau8@gmail.com
-- This updates the user_metadata to include role: admin

UPDATE auth.users
SET raw_user_meta_data = COALESCE(raw_user_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email = 'jylau8@gmail.com';
