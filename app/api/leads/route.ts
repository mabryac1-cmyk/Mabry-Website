import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { leads, insertLeadSchema } from "@/lib/schema";
import { getUncachableResendClient } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = insertLeadSchema.parse(body);
    
    const [newLead] = await db.insert(leads).values(validatedData).returning();
    
    try {
      const { client, fromEmail } = await getUncachableResendClient();
      
      await client.emails.send({
        from: fromEmail || 'Mabry\'s AC Website <noreply@mail.mabryac.com>',
        to: 'office@mabryac.com',
        replyTo: validatedData.email,
        subject: `New Quote Request from ${validatedData.name}`,
        html: `
          <h2>New Quote Request from Website</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Service:</strong> ${validatedData.service || 'Not specified'}</p>
          <p><strong>City:</strong> ${validatedData.city || 'Not specified'}</p>
          <p><strong>Message:</strong> ${validatedData.message || 'None'}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This lead was submitted via mabryac.com</p>
        `,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }
    
    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch soon.", id: newLead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);
    
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Please fill out all required fields correctly." },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
