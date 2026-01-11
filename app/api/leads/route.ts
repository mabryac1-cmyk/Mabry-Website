import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { leads, insertLeadSchema } from "@/lib/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = insertLeadSchema.parse(body);
    
    const [newLead] = await db.insert(leads).values(validatedData).returning();
    
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
