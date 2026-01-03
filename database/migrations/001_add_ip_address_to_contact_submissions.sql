-- Migration: Add ip_address field to contact_submissions table
-- Date: 2025-01-07
-- Description: Adds ip_address column to store visitor IP addresses for contact form submissions

-- Check if column exists before adding (safe to run multiple times)
ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS ip_address VARCHAR(45) AFTER message;

-- Add index for better query performance (optional but recommended)
-- CREATE INDEX idx_ip_address ON contact_submissions(ip_address);
