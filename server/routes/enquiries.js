/**
 * Enquiry Routes
 * Handles POST and GET requests for student enquiries
 */

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();
const ENQUIRIES_FILE = join(__dirname, '../data/enquiries.json');

/**
 * Helper function to read enquiries from JSON file
 * Returns empty array if file doesn't exist
 */
async function readEnquiries() {
  try {
    const data = await fs.readFile(ENQUIRIES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

/**
 * Helper function to write enquiries to JSON file
 */
async function writeEnquiries(enquiries) {
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
}

/**
 * Validation function for enquiry data
 * Returns { valid: boolean, errors: string[] }
 */
function validateEnquiry(data) {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.phone || data.phone.trim().length < 10) {
    errors.push('Valid phone number is required');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * POST /api/enquiries
 * Create a new enquiry
 * Validates input and stores to JSON file
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;
    
    // Validate input
    const validation = validateEnquiry({ name, email, phone, message });
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        errors: validation.errors
      });
    }
    
    // Create enquiry object with timestamp
    const enquiry = {
      id: Date.now().toString(), // Simple ID generation
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      course: course || 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString()
    };
    
    // Read existing enquiries and append new one
    const enquiries = await readEnquiries();
    enquiries.push(enquiry);
    
    // Write back to file
    await writeEnquiries(enquiries);
    
    // Return success response
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      enquiry: {
        id: enquiry.id,
        name: enquiry.name,
        email: enquiry.email
      }
    });
    
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

/**
 * GET /api/enquiries
 * Retrieve all enquiries (for admin/testing purposes)
 * In production, this should be protected with authentication
 */
router.get('/', async (req, res) => {
  try {
    const enquiries = await readEnquiries();
    
    // Return enquiries (optionally exclude sensitive data)
    res.json({
      success: true,
      count: enquiries.length,
      enquiries: enquiries.map(e => ({
        id: e.id,
        name: e.name,
        email: e.email,
        phone: e.phone,
        course: e.course,
        message: e.message,
        createdAt: e.createdAt
      }))
    });
    
  } catch (error) {
    console.error('Error reading enquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export { router as enquiryRoutes };

