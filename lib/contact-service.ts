export type ContactSubmission = { name: string; email: string; phone: string; company: string; projectType: string; productInterest: string; message: string };

// Keep provider-specific delivery code in this module when an email service is selected.
export async function submitContactInquiry(submission: ContactSubmission) {
  const recipient = process.env.CONTACT_EMAIL;
  void submission;
  return { accepted: true, deliveryConfigured: Boolean(recipient) };
}
