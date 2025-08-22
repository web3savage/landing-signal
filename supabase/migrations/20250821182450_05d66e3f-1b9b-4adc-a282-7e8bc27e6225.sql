-- Create early access signups table
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  telegram_handle TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT at_least_one_contact CHECK (email IS NOT NULL OR telegram_handle IS NOT NULL)
);

-- Enable Row Level Security
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public signup form)
CREATE POLICY "Anyone can submit early access signup" 
ON public.early_access_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (only admins should see signups)
CREATE POLICY "Only authenticated users can view signups" 
ON public.early_access_signups 
FOR SELECT 
USING (false); -- No one can read for now, can be updated later for admin access