import { permanentRedirect } from "next/navigation";

// The section is now "Acharyas of Bharata Varsha" at /acharyas.
// Kept as a permanent redirect so existing links and any indexed URLs
// still resolve rather than 404.
export default function TeachersRedirect() {
  permanentRedirect("/acharyas");
}
