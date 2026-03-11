import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kushaldj2002@gmail.com',
        pass: 'eowrolwsptraoxmy'
      }
    })
    
    const mailOptions = {
      from: 'kushaldj2002@gmail.com',
      to: 'kushaldj2002@gmail.com',
      subject: 'Portfolio Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }
    
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}