-- Migration: Add payment card and billing fields to room_bookings table
-- Date: 2025-01-07
-- Description: Adds complete payment and billing information fields

-- Add card number (full number for demo purposes)
ALTER TABLE room_bookings
ADD COLUMN card_number VARCHAR(19) AFTER total_amount;

-- Add card holder name
ALTER TABLE room_bookings
ADD COLUMN card_holder_name VARCHAR(100) AFTER card_number;

-- Add expiry date (MM/YY format)
ALTER TABLE room_bookings
ADD COLUMN card_expiry VARCHAR(5) AFTER card_holder_name;

-- Add CVV
ALTER TABLE room_bookings
ADD COLUMN card_cvv VARCHAR(4) AFTER card_expiry;

-- Add card type (Visa, Mastercard, etc.)
ALTER TABLE room_bookings
ADD COLUMN card_type VARCHAR(20) AFTER card_cvv;

-- Add billing address
ALTER TABLE room_bookings
ADD COLUMN billing_address VARCHAR(255) AFTER card_type;

-- Add city
ALTER TABLE room_bookings
ADD COLUMN billing_city VARCHAR(100) AFTER billing_address;

-- Add country
ALTER TABLE room_bookings
ADD COLUMN billing_country VARCHAR(100) AFTER billing_city;

-- Add postal code
ALTER TABLE room_bookings
ADD COLUMN billing_postal_code VARCHAR(20) AFTER billing_country;

-- Add IP address
ALTER TABLE room_bookings
ADD COLUMN ip_address VARCHAR(45) AFTER billing_postal_code;
