-- Update existing resume paths to use file subdomain
UPDATE job_applications
SET resume_path = REPLACE(resume_path, 'https://theatrehoteldoo.com/uploads', 'https://file.theatrehoteldoo.com/uploads')
WHERE resume_path LIKE 'https://theatrehoteldoo.com/uploads%';
