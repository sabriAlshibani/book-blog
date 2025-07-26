export interface CTAInput {
  placeholder: string;
  type?: string; // "text", "email", etc.
}

export interface CTAData {
  title: string;
  description: string;
  inputs?: CTAInput[];  // One or more inputs
  buttons?: string[];   // One or more buttons
  gradientFrom: string;
  gradientTo: string;
}
