/**
 * Main entry point for the application
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Run if this file is executed directly
if (require.main === module) {
  console.log(greet('World'));
}