import { useCallback, useEffect, useRef, useState } from "react";

// Copies a site link (or opens the native share sheet when `preferShare`
// is set and supported) and exposes a short-lived `copied` flag for a toast.
export default function useCopyLink() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const share = useCallback(async (path, { title, preferShare = false } = {}) => {
    const url = window.location.origin + path;
    if (preferShare && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // cancelled or unsupported → fall back to copying
      }
    }
    try {
      await navigator.clipboard?.writeText(url);
    } catch {
      // clipboard blocked; still show feedback
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  }, []);

  return { copied, share };
}
