-- Migration: Create work_permits table
-- Date: 2025-10-11
-- Description: Table to store work permit and employment contract data

CREATE TABLE IF NOT EXISTS work_permits (
  id INT AUTO_INCREMENT PRIMARY KEY,

  -- Permit Information
  license_number VARCHAR(50) NOT NULL UNIQUE,
  date_of_issue DATE NOT NULL,
  valid_from DATE NOT NULL,
  valid_until DATE NOT NULL,

  -- Employee Information
  employee_name VARCHAR(255) NOT NULL,
  employee_address TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  passport_number VARCHAR(50) NOT NULL,
  passport_issued_in VARCHAR(255) NOT NULL,
  citizenship VARCHAR(100) NOT NULL,

  -- Company Information
  company_name VARCHAR(255) NOT NULL DEFAULT 'THEATRE HOTEL d.o.o.',
  company_address VARCHAR(255) NOT NULL DEFAULT 'Matošića 21, 21000, Split, Hrvatska',
  mbs VARCHAR(20) NOT NULL DEFAULT '060416714',
  oib VARCHAR(20) NOT NULL DEFAULT '13682410736',

  -- Employment Details
  occupation VARCHAR(255) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,

  -- Additional Fields
  email VARCHAR(255) NULL,
  contract_no VARCHAR(100) NULL,

  -- PDF Storage
  pdf_file_path VARCHAR(500) NULL,
  pdf_public_url VARCHAR(500) NULL,

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(100) NULL,

  INDEX idx_license_number (license_number),
  INDEX idx_employee_name (employee_name),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
