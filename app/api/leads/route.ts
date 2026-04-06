import { NextRequest, NextResponse } from "next/server";
import { getResendClient } from "@/lib/resend";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  service: z.string().optional(),
  message: z.string().optional(),
  city: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = leadSchema.parse(body);

    const client = getResendClient();
    const fromEmail = "Mabry's AC Website <noreply@mail.mabryac.com>";

    await client.emails.send({
      from: fromEmail,
      to: "office@mabryac.com",
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

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch soon." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission error:", error);

    if (error instanceof z.ZodError) {
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
