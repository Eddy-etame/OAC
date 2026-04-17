import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Support either inherited Vite env or standard Next.js env without exposing to client
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || process.env.VITE_FORMSPREE_ID || 'mjvndjzo';
    
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
    } else {
      return NextResponse.json({ success: false, error: 'Formspree rejected the submission' }, { status: 500 });
    }
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
