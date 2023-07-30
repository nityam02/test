import { NextRequest, NextResponse } from "next/server";
import { products } from "../../../index";

interface Context {
  params: {
    id: string;
  };
}
export async function GET(_: unknown, context: Context) {
  return NextResponse.json(products);
}
